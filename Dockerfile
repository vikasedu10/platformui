# Use an official Node.js runtime as the base image
FROM node:alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the entire app directory into the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Node.js runtime as the base image for serving the app
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the build folder from the previous stage
COPY --from=build /app/build .

# Install a simple HTTP server for serving static content
RUN npm install -g serve --silent

# Set the command to start the server
EXPOSE 3000
CMD ["serve", "-p", "3000", "-s", "."]
