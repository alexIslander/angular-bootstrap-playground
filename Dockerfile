# Stage 1: Build the application
FROM node:18-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application for production
RUN npm run build --prod
#-------------------------------
# Stage 2: Serve the application
#-------------------------------
FROM nginx:1.21-alpine

# Copy the built application from the previous stage to the container
COPY --from=build /app/dist/angular-bootstrap-playground /usr/share/nginx/html

# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom nginx configuration to the container
COPY nginx.conf /etc/nginx/conf.d/

# Set the command to start the server
CMD ["nginx", "-g", "daemon off;"]
