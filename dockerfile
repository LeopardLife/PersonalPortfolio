# Base stage
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Dependencies stage for production
FROM base AS deps
RUN npm ci --only=production

# Builder stage
FROM base AS builder
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production stage
FROM node:22-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs && \
  chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]

