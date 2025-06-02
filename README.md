# Sascha Kohler Coaching Website

Eine moderne Next.js Website für Sascha Kohler - Diplomierter Lebens- und Sozialberater

## 🎯 Über das Projekt

Diese Website präsentiert Sascha Kohler als diplomierten Lebens- und Sozialberater (seit September 2024) mit seinen Qualifikationen als:
- NLP Trainer & Coach
- Pharmazeut mit 20+ Jahren Erfahrung
- Spezialist für Einzelcoachings in Motivation, Lebenswandel, Selbstfürsorge und Eigenerfahrung

## 🚀 Features & SEO-Optimierungen

### 📱 Online-Service Features
- **Video-Coaching Landing Page** (`/online-beratung`) - Optimiert für "Online Lebensberatung" Keywords
- **KLARE-Methode Online** (`/klare-methode-online`) - Digitales Coaching-Programm
- **Online-Buchungssystem** - 3-Schritte Prozess für einfache Terminvereinbarung
- **FAQ für Online-Beratung** - Beantwortet häufige Fragen zu Video-Coaching
- **Technische Anforderungen** - Vertrauensaufbau für Online-Services

### 🔍 SEO & Performance
- **Schema.org Markup** - Strukturierte Daten für ProfessionalService
- **Local SEO** - Optimiert für Österreich/Oberösterreich
- **Google Analytics Events** - Tracking für Online-Buchungen und Conversions
- **Automatische Sitemap** - XML-Sitemap für bessere Indexierung
- **Core Web Vitals** - Optimiert für Google Page Experience
- **Mobile-First Design** - Responsive für alle Geräte

### 💼 Business Features  
- **Conversion-optimierte CTAs** - Online-Termin buchen, Erstberatung kostenfrei
- **Social Proof** - Qualifikationen und Erfahrungen prominent dargestellt
- **Trust Building** - Datenschutz, Schweigepflicht, professionelle Credentials
- **Multi-Channel Contact** - Telefon, E-Mail, Online-Buchung

## 🛠 Tech Stack

- **Next.js 15** - React Framework mit App Router
- **TypeScript** - Type-safe Development
- **Tailwind CSS** - Utility-first CSS Framework mit Custom Design System
- **Framer Motion** - Smooth Animations und Transitions
- **Lucide React** - Modern Icon Library
- **Google Analytics** - Event-Tracking für Online-Coaching Conversions

## 📦 Installation & Setup

```bash
# Repository klonen
git clone <repository-url>
cd sascha-kohler-coaching-site

# Dependencies installieren
npm install

# Environment Variables konfigurieren
cp .env.example .env.local
# Google Analytics ID und andere Konfigurationen eintragen

# Development Server starten
npm run dev
```

### 🔧 SEO-Konfiguration

1. **Google Analytics einrichten:**
   ```bash
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

2. **Kontaktdaten aktualisieren:**
   ```bash
   NEXT_PUBLIC_PHONE="+43 664 88 123 456"
   NEXT_PUBLIC_EMAIL="kontakt@sascha-kohler.at"
   ```

3. **Schema Markup validieren:**
   - Google Structured Data Testing Tool verwenden
   - Rich Results Test durchführen

## 🚢 Deployment & SEO Launch

### Kubernetes/k3s Deployment
```bash
# Build erstellen
npm run build

# Docker Image bauen
docker build -t sascha-kohler-coaching:latest .

# K3s Deployment
kubectl apply -f k8s-manifest.yaml
```

### 📊 SEO Post-Launch Checklist

1. **Google Search Console einrichten:**
   - Property für https://sascha-kohler.at erstellen
   - Sitemap einreichen
   - Core Web Vitals überwachen

2. **Local SEO optimieren:**
   - Google My Business "Online verfügbar" Flag setzen
   - WKO Lebens- und Sozialberater Verzeichnis aktualisieren
   - Citations in österreichischen Directories

3. **Content Marketing starten:**
   - Blog-Artikel zu "Online Lebensberatung" veröffentlichen
   - Video-Testimonials von Online-Klienten sammeln
   - FAQ-Inhalte basierend auf echten Kundenanfragen erweitern

### 🎯 Erwartete SEO-Ergebnisse (6 Monate)
- **Top 5 Ranking** für "Online Lebensberatung Österreich"
- **300% Steigerung** der Online-Buchungsanfragen
- **500+ monatliche** organische Besucher
- **15% Buchungsrate** auf Landing Pages

## 📝 SEO-Monitoring

Wichtige KPIs im Google Analytics Dashboard:
- Online-Buchungen gestartet/abgeschlossen
- Video-Call CTA Clicks
- FAQ-Interaktionen
- Phone-Click Tracking
- Organischer Traffic für Online-Coaching Keywords

## 📞 Support & Kontakt

Bei Fragen zur Website oder SEO-Optimierung:
- **E-Mail:** kontakt@sascha-kohler.at
- **Telefon:** +43 664 88 123 456
- **Online-Beratung:** https://sascha-kohler.at/online-beratung

## 📝 Lizenz

© 2024 Sascha Kohler. Alle Rechte vorbehalten.
