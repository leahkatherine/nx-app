FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
EXPOSE 4200
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
ENV ADDRESS = 0.0.0.0 PORT=4200

