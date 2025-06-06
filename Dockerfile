FROM node:18

# Speed up Puppeteer install
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /app
COPY backend ./backend
WORKDIR /app/backend

RUN npm install

CMD ["node", "index.js"]
