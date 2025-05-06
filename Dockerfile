# Step 1: Build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the app and build it
COPY . .
RUN npm run build

# Step 2: Run the app
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production deps
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy built app from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Next.js runs on port 3000 by default
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
