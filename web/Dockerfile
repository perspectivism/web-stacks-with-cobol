FROM node:9

RUN mkdir -p /opt/web/app
COPY app/package.json app/package-lock.json /opt/web/app/

WORKDIR /opt/web/app
RUN npm install
COPY app /opt/web/app

EXPOSE 3000

CMD ["npm", "start"]
