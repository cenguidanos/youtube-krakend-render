# stage 1
FROM node:current-alpine AS build-env
WORKDIR /app
ADD package.json /app
RUN npm i
COPY . .
RUN npm run build
RUN npm prune --production

# stage 2
FROM node:current-alpine AS packager
WORKDIR /app
ADD package.json /app
RUN npm i --production
COPY --from=build-env /app/dist ./dist
RUN npm i -g pkg
RUN pkg dist/main.js --output pkg --target latest-linux-x64

# stage 3
FROM gcr.io/distroless/cc-debian10
WORKDIR /app
COPY --from=packager /app/pkg /app/pkg

ENV NODE="production"

ENTRYPOINT [ "./pkg" ]