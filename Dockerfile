FROM node:12.20.0

COPY package.json package-lock.json /app/

WORKDIR /app

RUN yarn install

COPY . /app/

EXPOSE 3000

CMD yarn dev
