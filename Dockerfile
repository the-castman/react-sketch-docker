# Stage 1, install base for the REACT web-build application
FROM node:12 as web-build-base
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent

# Stage 2, install base for the REACT web-build application
FROM web-build-base as builder
COPY . ./
RUN npm run citest
RUN npm run build

# Stage 3: build onto NGINX to have only the compiled app, ready for production
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]