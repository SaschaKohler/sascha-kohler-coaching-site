#!/bin/bash

# Setup-Script für Sascha Kohler Coaching Website
echo "🚀 Setting up Sascha Kohler Coaching Website..."

# Wechsle ins Projektverzeichnis
cd /Users/saschakohler/Documents/01_Development/Active_Projects/sascha-kohler-coaching-site

# Installiere Dependencies
echo "📦 Installing dependencies..."
npm install

# Erstelle öffentlichen Ordner mit Platzhalter-Bildern
mkdir -p public/images

echo "✅ Setup completed!"
echo ""
echo "🎯 Next Steps:"
echo "1. Run 'npm run dev' to start development server"
echo "2. Open http://localhost:3000 to view the website"
echo "3. Replace placeholder images in public/images/"
echo "4. Update contact information in Contact.tsx"
echo "5. Customize content in component files"
echo ""
echo "🚢 For Production Deployment:"
echo "1. Build Docker image: docker build -t sascha-kohler-coaching:latest ."
echo "2. Deploy to k3s: kubectl apply -f k8s-manifest.yaml"
echo ""
echo "📁 Project Structure:"
echo "├── src/"
echo "│   ├── app/                  # Next.js App Router"
echo "│   ├── components/           # React Components"
echo "│   └── styles/              # Global Styles"
echo "├── public/                  # Static Assets"
echo "├── k8s-manifest.yaml        # Kubernetes Deployment"
echo "└── Dockerfile               # Container Configuration"

