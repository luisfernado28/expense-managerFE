# Use a Node.js base image
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) or yarn.lock (if using yarn)
# This allows Docker to cache the dependencies layer
COPY package.json .

# Install dependencies
RUN npm install
RUN npm i -g serve
# Copy the rest of the application code
COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build
# Expose the port Vite typically uses (or the one you configured in vite.config.js)
EXPOSE 3000

# Command to run the development server
CMD [ "serve", "-s", "dist" ]