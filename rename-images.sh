#!/bin/bash

# Bilder umbenennen Script
cd public/images

# Portraits und professionelle Bilder
mv IMG_3456.JPG sascha-kohler-portrait.jpg 2>/dev/null || true
mv Vortrag.JPG sascha-kohler-vortrag.jpg 2>/dev/null || true
mv IMG_7944.JPG sascha-kohler-coaching-session.jpg 2>/dev/null || true

# Neue Bilder kategorisieren
mv IMG_7648.jpeg coaching-walk-nature-1.jpg 2>/dev/null || true
mv IMG_7650.jpeg coaching-walk-nature-2.jpg 2>/dev/null || true
mv IMG_7668.jpeg coaching-outdoor-1.jpg 2>/dev/null || true
mv IMG_7695.jpeg coaching-outdoor-2.jpg 2>/dev/null || true
mv IMG_7696.jpeg coaching-outdoor-3.jpg 2>/dev/null || true
mv IMG_7698.jpeg coaching-outdoor-4.jpg 2>/dev/null || true
mv IMG_7700.jpeg coaching-outdoor-5.jpg 2>/dev/null || true

# Fahrrad-Bilder (falls für Sport-Coaching relevant)
mv IMG_3502.jpeg sport-cycling-1.jpg 2>/dev/null || true
mv IMG_3544.jpeg sport-cycling-2.jpg 2>/dev/null || true
mv "IMG_7935 2.jpeg" sport-activity-1.jpg 2>/dev/null || true
mv "IMG_7935 3.jpeg" sport-activity-2.jpg 2>/dev/null || true

echo "Bilder wurden umbenannt!"
ls -la *.jpg *.jpeg 2>/dev/null