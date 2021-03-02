# stage 1
FROM node:current-alpine AS build-env
WORKDIR /app
ADD package.json /app
RUN npm i
COPY . .
RUN npm run build

# stage 2
FROM node:current-alpine AS packager
WORKDIR /app
ADD package.json /app
RUN npm i --production
RUN npm prune --production
COPY --from=build-env /app/dist ./dist
RUN npm i -g pkg
RUN pkg dist/main.js --output app_pkg --target latest-linux-x64

# stage 3
FROM gcr.io/distroless/cc-debian10
WORKDIR /app
COPY --from=packager /app/app_pkg /app/app_pkg

ENV NODE="production"

ENTRYPOINT [ "./app_pkg" ]
