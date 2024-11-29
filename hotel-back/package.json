# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first (tanto package.json como package-lock.json si existe)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Expose port (ajusta según tu configuración)
EXPOSE 4000

# Start command
CMD ["npm", "start"]
