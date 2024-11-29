# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using npm install instead of npm ci
RUN npm install

# Copy rest of the application
COPY . .

# Expose port
EXPOSE 4000

# Start command
CMD ["npm", "start"]
