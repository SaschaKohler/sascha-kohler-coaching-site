# Cookie Consent Manager - Setup & Konfiguration

## 📋 Übersicht

Die Website verwendet einen vollständig integrierten Cookie Consent Manager mit Google Consent Mode v2 für die Anbindung an den Google Tag Manager (GTM).

## 🎯 Architektur

### Komponenten

1. **`AnalyticsConsentProvider.tsx`** - Hauptkomponente für Cookie Consent Management
   - Verwaltet Consent-Status und User-Präferenzen
   - Integriert GTM mit Consent Mode v2
   - Zeigt Cookie Banner automatisch beim ersten Besuch

2. **`CookieConsentBanner.tsx`** - UI-Komponente für Cookie-Einstellungen
   - Moderne, DSGVO-konforme Benutzeroberfläche
   - Toggle für Notwendig/Statistik/Marketing Cookies
   - Speichert Präferenzen in localStorage und Cookie

3. **`consent.ts`** - Utility-Funktionen für Consent-Verwaltung
   - localStorage + Cookie Persistierung (DSGVO-konform)
   - 180 Tage Cookie-Lebensdauer
   - Versionierung für Consent-Updates

4. **`analytics.ts`** - Google Tag Manager Integration
   - Consent Mode v2 Implementierung
   - DataLayer Event-Tracking
   - Tracking nur mit User-Zustimmung

## 🔧 Konfiguration

### 1. Environment Variable

In `.env` oder `.env.local`:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**Wichtig:** Nur die GTM Container ID eintragen. Keine separate Google Analytics ID erforderlich!

### 2. Provider einbinden

Der Provider ist bereits in `src/app/layout.tsx` eingebunden:

```tsx
<AnalyticsConsentProvider>{children}</AnalyticsConsentProvider>
```

### 3. Google Tag Manager Setup

#### Im GTM Container konfigurieren:

1. **Consent Mode aktivieren:**
   - Container Settings → Additional Settings
   - "Enable consent overview" aktivieren

2. **Google Analytics Tag einrichten:**
   - Trigger: Consent Initialization - All Pages
   - Consent Settings:
     - Analytics Storage: Required
     - Ad Storage: Required (falls Ads verwendet werden)

3. **Tags nach Consent feuern:**
   - Built-in Variables aktivieren:
     - Consent State - Analytics Storage
     - Consent State - Ad Storage
   
   - Trigger Bedingungen:
     - Fires on: Consent Initialization
     - Only fire when: Analytics Storage = granted

## 📊 Consent Mode v2 Standard-Einstellungen

### Default (vor User-Entscheidung):
```javascript
{
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  functionality_storage: "granted",  // Technisch notwendig
  security_storage: "granted"         // Technisch notwendig
}
```

### Nach Zustimmung "Alle akzeptieren":
```javascript
{
  ad_storage: "granted",
  analytics_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  functionality_storage: "granted",
  security_storage: "granted"
}
```

## 🎨 Cookie-Kategorien

### 1. Notwendig (Immer aktiv)
- Session-Management
- Consent-Speicherung
- Security Features
- **Kann nicht deaktiviert werden**

### 2. Statistik
- Google Analytics (über GTM)
- Performance Monitoring
- User-Interaktionen
- **Erfordert Zustimmung**

### 3. Marketing
- Remarketing Tags
- Conversion Tracking
- Ad Personalization
- **Erfordert Zustimmung**

## 🔄 User Flow

1. **Erster Besuch:**
   - Cookie Banner wird automatisch angezeigt
   - Default: Nur notwendige Cookies aktiv
   - User muss Entscheidung treffen (kein Auto-Close)

2. **Entscheidung getroffen:**
   - Präferenzen in localStorage + Cookie gespeichert
   - GTM Consent Mode aktualisiert
   - Banner schließt sich
   - Cookie-Einstellungen Button erscheint (links unten)

3. **Spätere Änderungen:**
   - User kann jederzeit über Button Cookie-Einstellungen öffnen
   - Änderungen werden sofort übernommen
   - GTM wird automatisch aktualisiert

## 💾 Datenspeicherung

### localStorage
```json
{
  "version": 1,
  "preferences": {
    "necessary": true,
    "statistics": false,
    "marketing": false
  },
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

### Cookie (Fallback)
- Name: `sk_cookie_consent`
- Max-Age: 180 Tage
- Path: `/`
- SameSite: `Lax`
- Secure: Nur bei HTTPS

## 🧪 Testing

### Lokales Testing

```bash
# Dev Server starten
npm run dev

# Browser öffnen
open http://localhost:3000
```

**Test-Szenarien:**
1. ✅ Cookie Banner erscheint beim ersten Besuch
2. ✅ "Alle akzeptieren" speichert Präferenzen
3. ✅ "Alle ablehnen" setzt nur notwendige Cookies
4. ✅ Individuelle Auswahl funktioniert
5. ✅ Einstellungen-Button erscheint nach Speichern
6. ✅ Präferenzen bleiben nach Reload erhalten

### GTM Preview Mode

1. GTM Container öffnen → Preview
2. Website URL eingeben
3. Consent Events prüfen:
   - `gtm.js` (Initialization)
   - `consent` (Default)
   - `consent` (Update nach User-Entscheidung)
   - `cookie_consent_update` (Custom Event)

### Browser DevTools

```javascript
// Consent Status prüfen
dataLayer

// Gespeicherte Präferenzen anzeigen
JSON.parse(localStorage.getItem('sk-cookie-consent'))

// Cookie anzeigen
document.cookie
```

## 🛡️ DSGVO-Konformität

✅ **Opt-in Prinzip:** Tracking nur nach expliziter Zustimmung
✅ **Transparenz:** Klare Beschreibung jeder Cookie-Kategorie
✅ **Kontrolle:** User kann Präferenzen jederzeit ändern
✅ **Speicherung:** Max. 180 Tage (kann angepasst werden)
✅ **Widerruf:** Einfacher Zugang zu Einstellungen
✅ **Consent Mode v2:** Entspricht Google's neuesten Standards

## 🔗 Integration in eigenen Code

### Hook verwenden

```tsx
import { useCookieConsent } from '@/components/AnalyticsConsentProvider';

function MyComponent() {
  const { status, preferences, openManager } = useCookieConsent();
  
  return (
    <div>
      <p>Statistik aktiv: {preferences.statistics ? 'Ja' : 'Nein'}</p>
      <button onClick={openManager}>
        Cookie-Einstellungen ändern
      </button>
    </div>
  );
}
```

### Custom Events tracken

```tsx
import { event } from '@/utils/analytics';

// Event wird nur getrackt, wenn User zugestimmt hat
event({
  action: 'button_click',
  category: 'User Interaction',
  label: 'CTA Button'
});
```

## 📝 Wartung

### Consent Version aktualisieren

Wenn sich Cookie-Policy ändert (z.B. neue Tracking-Services):

1. `CONSENT_VERSION` in `consent.ts` erhöhen
2. User sehen automatisch wieder den Banner
3. Alte Präferenzen bleiben erhalten, werden aber neu bestätigt

```typescript
// consent.ts
export const CONSENT_VERSION = 2; // Von 1 auf 2 erhöhen
```

### Cookie-Lebensdauer anpassen

```typescript
// consent.ts
export const COOKIE_MAX_AGE_DAYS = 365; // Von 180 auf 365 ändern
```

## 🚨 Troubleshooting

### Problem: Banner erscheint nicht
- ✅ `NEXT_PUBLIC_GTM_ID` in `.env` gesetzt?
- ✅ localStorage nicht blockiert?
- ✅ JavaScript aktiviert?

### Problem: GTM feuert nicht
- ✅ GTM Container ID korrekt?
- ✅ User hat Statistik zugestimmt?
- ✅ GTM Preview Mode zum Debuggen nutzen

### Problem: Consent wird nicht gespeichert
- ✅ localStorage verfügbar?
- ✅ Cookies erlaubt im Browser?
- ✅ DevTools Console auf Fehler prüfen

## 📚 Weitere Ressourcen

- [Google Consent Mode v2 Dokumentation](https://developers.google.com/tag-platform/security/guides/consent)
- [GTM Best Practices](https://developers.google.com/tag-platform/tag-manager/web)
- [DSGVO Cookie-Richtlinien](https://gdpr.eu/cookies/)
