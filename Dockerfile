ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-alpine as BUILD_IMAGE
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build


FROM node:${NODE_VERSION}-alpine as PROD_IMAGE
WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/
EXPOSE 5000

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 5000
ENV PORT 5000
CMD ["npm", "run", "preview"]