# Sascha Kohler Coaching Website

Eine moderne Next.js Website für Sascha Kohler - Diplomierter Lebens- und Sozialberater

## 🎯 Über das Projekt

Diese Website präsentiert Sascha Kohler als diplomierten Lebens- und Sozialberater (seit September 2024) mit seinen Qualifikationen als:
- NLP Trainer & Coach
- Pharmazeut mit 20+ Jahren Erfahrung
- Spezialist für Einzelcoachings in Motivation, Lebenswandel, Selbstfürsorge und Eigenerfahrung

## 🚀 Features

- **Responsive Design** - Optimiert für alle Geräte
- **Modern UI/UX** - Sauberes, professionelles Design mit Framer Motion Animationen
- **SEO-optimiert** - Vollständige Meta-Tags und strukturierte Daten
- **Kontaktformular** - Direkte Kommunikation mit potenziellen Klienten
- **Service-Übersicht** - Detaillierte Darstellung der Coaching-Bereiche
- **Qualifikationen** - Übersicht über Ausbildung und Erfahrung
- **Vorträge** - Information zu Einzelvorträgen und Workshops

## 🛠 Tech Stack

- **Next.js 15** - React Framework
- **TypeScript** - Type-safe Development
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animation Library
- **Heroicons** - Icon Library

## 📦 Installation

```bash
# Repository klonen
git clone <repository-url>
cd sascha-kohler-coaching-site

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

## 🚢 Deployment

Das Projekt ist für Kubernetes/k3s optimiert:

```bash
# Build erstellen
npm run build

# Docker Image bauen
docker build -t sascha-kohler-coaching:latest .

# K3s Deployment
kubectl apply -f k8s-manifest.yaml
```

## 📝 Lizenz

© 2024 Sascha Kohler. Alle Rechte vorbehalten.
