FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
copy . .
RUN npm run build
EXPOSE 5173

# biar bisa diakses external
CMD ["npm", "run", "dev", "--", "--host"] 
