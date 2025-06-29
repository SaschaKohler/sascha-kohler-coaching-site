#!/bin/bash

echo "🔨 Starting Docker build for sascha-kohler-coaching..."
echo "================================================"

# Farben für Output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Build starten
echo -e "${GREEN}Step 1: Building Docker image...${NC}"
if docker build --progress=plain -t blisha234/sascha-kohler-coaching:latest .; then
    echo -e "${GREEN}✅ Docker build successful!${NC}"
else
    echo -e "${RED}❌ Docker build failed!${NC}"
    exit 1
fi

# Image Größe anzeigen
echo -e "\n${GREEN}Step 2: Checking image size...${NC}"
docker images blisha234/sascha-kohler-coaching:latest

# Optional: Image testen
echo -e "\n${GREEN}Step 3: Testing image...${NC}"
echo "Starting container for testing..."
docker run -d --name test-coaching -p 3000:3000 blisha234/sascha-kohler-coaching:latest

# Warte kurz
sleep 5

# Check ob Container läuft
if docker ps | grep test-coaching > /dev/null; then
    echo -e "${GREEN}✅ Container is running!${NC}"
    echo "You can test it at http://localhost:3000"
    echo ""
    echo "To see logs: docker logs test-coaching"
    echo "To stop: docker stop test-coaching && docker rm test-coaching"
else
    echo -e "${RED}❌ Container failed to start!${NC}"
    echo "Showing logs:"
    docker logs test-coaching
    docker rm test-coaching
    exit 1
fi

echo -e "\n${GREEN}Build complete!${NC}"