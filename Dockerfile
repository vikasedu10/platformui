#FROM node:alpine
#WORKDIR /usr/src/app
#COPY package*.json ./
## copy build folder to path
#ADD package.json /usr/src/app/package.json 
#RUN npm install --only=production
#RUN npm install react-scripts@5.0.1 -g
## COPY build .
#COPY . .
#EXPOSE 3000
#CMD ["npm", "start"]

# Use an official Node.js runtime as the base image
FROM node:alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN ls
# Install dependencies
RUN npm install --silent

# Copy the entire app directory into the container
RUN ls
COPY . .
RUN ls
# Build the React app
RUN npm run build
RUN ls
RUN pwd

# Use a lightweight Node.js runtime as the base image for serving the app
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app
#RUN mkdir platformui
#RUN ls
# RUN mkdir platformui
WORKDIR /app
# # Copy the build folder from the previous stage
COPY --from=build /app/build .

# Install a simple HTTP server for serving static content
RUN npm install -g serve --silent
RUN ls
RUN pwd
# Set the command to start the server
EXPOSE 3000
CMD ["serve", "-p", "3000", "-s", "."]
