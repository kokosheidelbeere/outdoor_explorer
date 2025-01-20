# Base Node.js image for development
FROM node:20-slim

# Install basic tools
RUN apt-get update && apt-get install -y \
    curl \
    git \
    nginx \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose ports
EXPOSE 3000

# Start command
CMD ["npm", "start"]