# Contact Form API Implementation

## Übersicht

Diese Implementierung erweitert die Coaching-Website um ein funktionales Kontaktformular mit Make.com Webhook-Integration für automatisierte E-Mail-Antworten.

## Implementierte Komponenten

### 1. API Route: `/src/app/api/contact-form/route.ts`

**Features:**
- Vollständige Formular-Validierung (Name, E-Mail, Nachricht erforderlich)
- E-Mail-Format-Validierung mit Regex
- Webhook-Integration mit Make.com
- Umfassende Fehlerbehandlung
- Request-Timeout (10 Sekunden)
- CORS-Unterstützung

**Datenstruktur an Make.com:**
```json
{
  "name": "Vollständiger Name",
  "email": "user@example.com",
  "message": "Nachricht des Users",
  "phone": "Optional: Telefonnummer",
  "subject": "Gewählter Betreff",
  "timestamp": "2025-06-13T10:30:00.000Z",
  "source": "sascha-kohler.at",
  "page": "kontakt",
  "language": "de",
  "userAgent": "Browser Info",
  "ip": "User IP für Analytics"
}
```

### 2. Contact Form Component: `/src/components/ContactForm.tsx`

**Features:**
- Vollständige TypeScript-Typisierung
- React State Management (FormData, FormState)
- Real-time Fehlerbehandlung
- Loading States mit Spinner
- Success/Error Messages
- Automatisches Form-Reset nach Erfolg
- Responsive Design mit Coaching-Farbschema

**Formular-Felder:**
- Name (required)
- E-Mail (required, validiert)
- Telefon (optional)
- Betreff (Dropdown mit Coaching-Optionen)
- Nachricht (required, Textarea)
- Datenschutzerklärung Link

### 3. Kubernetes Manifest Updates

**Neue Secrets:**
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: coaching-site-secrets
  namespace: sascha-kohler-coaching
type: Opaque
stringData:
  MAKE_CONTACT_WEBHOOK_URL: "https://hook.eu2.make.com/lcovnsx4lhuhtr5vvjdfw0u1jihiyk77"
```

**Environment Variables:**
```yaml
env:
  - name: MAKE_CONTACT_WEBHOOK_URL
    valueFrom:
      secretKeyRef:
        name: coaching-site-secrets
        key: MAKE_CONTACT_WEBHOOK_URL
```

## Make.com Integration

### Webhook URL
```
https://hook.eu2.make.com/lcovnsx4lhuhtr5vvjdfw0u1jihiyk77
```

### Empfohlene Make.com Workflow-Struktur:

1. **Webhook Trigger**
   - Empfängt Kontaktformular-Daten
   - Parsing der JSON-Payload

2. **E-Mail Template Processing**
   - Verwendung der HTML-E-Mail-Vorlage
   - Personalisierung mit {{name}} Variable
   - Betreff: "Vielen Dank für Ihr Vertrauen, {{name}} - Ihr nächster Schritt zu mentaler Stärke"
   - Preheader: "Ich melde mich innerhalb von 24h bei Ihnen • Kostenloses Klarheitsgespräch • Über 1000 erfolgreiche Gespräche"

3. **E-Mail Send**
   - An: {{email}} (User E-Mail)
   - Von: coaching@sascha-kohler.at
   - HTML-Template mit Personalisierung

4. **Internal Notification** (optional)
   - Benachrichtigung an Sascha über neue Anfrage
   - Zusammenfassung der Kontaktdaten

## Deployment

### Lokale Entwicklung
```bash
# Environment Variable setzen
echo "MAKE_CONTACT_WEBHOOK_URL=https://hook.eu2.make.com/lcovnsx4lhuhtr5vvjdfw0u1jihiyk77" >> .env.local

# Development Server starten
npm run dev
```

### Kubernetes Deployment
```bash
# Manifest anwenden
kubectl apply -f k8s-manifest.yaml

# Secret Status prüfen
kubectl get secrets -n sascha-kohler-coaching

# Pod Logs prüfen
kubectl logs -f deployment/sascha-kohler-coaching-site -n sascha-kohler-coaching
```

## Testing

### API Endpoint testen
```bash
curl -X POST https://sascha-kohler.at/api/contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message",
    "subject": "Test"
  }'
```

### Erwartete Antwort (Erfolg):
```json
{
  "success": true,
  "message": "Ihre Nachricht wurde erfolgreich übermittelt. Ich melde mich innerhalb von 24 Stunden bei Ihnen.",
  "data": {
    "name": "Test User",
    "email": "test@example.com",
    "timestamp": "2025-06-13T10:30:00.000Z"
  }
}
```

## Sicherheit

### Implementierte Sicherheitsmaßnahmen:
- Input Validation & Sanitization
- Rate Limiting durch Kubernetes
- CORS-Konfiguration
- Webhook-URL als Kubernetes Secret
- Request Timeouts
- Error Handling ohne Informationsleckage

### Weitere Empfehlungen:
- Rate Limiting auf API-Ebene
- Captcha für Spam-Schutz
- Webhook-Signature-Validation
- Monitoring & Alerting

## Monitoring

### Wichtige Metriken:
- API Response Times
- Error Rates
- Webhook Success/Failure
- Form Submission Rates

### Log Monitoring:
```bash
# API Logs
kubectl logs -f deployment/sascha-kohler-coaching-site -n sascha-kohler-coaching | grep "contact-form"

# Webhook Fehler
kubectl logs -f deployment/sascha-kohler-coaching-site -n sascha-kohler-coaching | grep "Make.com Webhook Fehler"
```

## Troubleshooting

### Häufige Probleme:

1. **Webhook nicht erreichbar**
   - Prüfen: MAKE_CONTACT_WEBHOOK_URL korrekt gesetzt
   - Testen: Webhook-URL direkt mit curl

2. **Formular sendet nicht**
   - Prüfen: Browser Console für JavaScript-Fehler
   - Testen: API-Endpoint direkt

3. **E-Mail kommt nicht an**
   - Prüfen: Make.com Workflow-Status
   - Testen: Make.com Webhook-Logs

### Debug-Kommandos:
```bash
# Environment Variables prüfen
kubectl exec -it deployment/sascha-kohler-coaching-site -n sascha-kohler-coaching -- env | grep MAKE

# Secret Inhalt prüfen
kubectl get secret coaching-site-secrets -n sascha-kohler-coaching -o yaml
```

## Nächste Schritte

1. **Make.com Workflow konfigurieren**
2. **E-Mail-Template in Make.com implementieren**
3. **Testing & Monitoring einrichten**
4. **Performance-Optimierung**
5. **Erweiterte Sicherheitsmaßnahmen**

## Kontakt

Bei Fragen zur Implementierung:
- Sascha Kohler: coaching@sascha-kohler.at
- GitHub Issues: Repository Issues
