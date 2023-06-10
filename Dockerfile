FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install --only=production
RUN npm install react-scripts@5.0.1 -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
