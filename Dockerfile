# Use official Node.js LTS image
FROM node:20-alpine

# Install GCC and build tools
RUN apk add --no-cache gcc g++ make musl-dev

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Build Next.js application
RUN npm run build

# Expose port
EXPOSE 3000

# Create temp directory for C compilation
RUN mkdir -p /app/temp

# Start the application
CMD ["npm", "start"]
