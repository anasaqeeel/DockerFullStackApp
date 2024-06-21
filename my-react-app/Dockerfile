#BASE IMAGE (USE FROM NODE IMG)
FROM node:16
WORKDIR /app
#COPY -> local sy both package-lock and json ko copy kr k docker mn (workdir) mn paste
COPY ./package*.json ./
RUN npm install
COPY . .

CMD ["npm","run","start"]