FROM node:18

# Create app directory
WORKDIR /app

# Copy frontend & backend
COPY backend ./backend
COPY frontend ./frontend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Serve frontend statically
WORKDIR /app
RUN mkdir public && cp -r frontend/* public/

# Final start command
CMD ["node", "backend/index.js"]
