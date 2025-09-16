FROM node:lts AS build
WORKDIR /app
COPY . .

# Install pnpm secara global
RUN npm install -g pnpm

# Install dependencies dengan pnpm
RUN pnpm install --frozen-lockfile

# Build project
RUN pnpm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80