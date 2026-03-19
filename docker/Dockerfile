FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY client/ ./client/
WORKDIR /app/client
RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine
COPY --from=builder /app/client/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]