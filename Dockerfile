# Multi-stage Dockerfile für Next.js
FROM node:18-alpine AS base

# Dependencies installieren
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Package files kopieren
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Dev dependencies für Build
FROM base AS dev-deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Builder Stage
FROM base AS builder
WORKDIR /app

# Alle Dateien kopieren
COPY . .

# Dependencies vom dev-deps stage kopieren
COPY --from=dev-deps /app/node_modules ./node_modules

# Build arguments
ARG NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
ENV NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=$NEXT_PUBLIC_CONTACT_FORM_ENDPOINT

# Next.js build
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# User erstellen
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Public assets kopieren - WICHTIG: Behalte die Original-Struktur
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# .next Ordner erstellen
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Standalone build und static files kopieren
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start command
CMD ["node", "server.js"]
