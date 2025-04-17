FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
copy . .
RUN npm run build
EXPOSE 8080

# biar bisa diakses external
CMD ["npm", "run", "preview"] 
