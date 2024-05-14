FROM node:alpine
WORKDIR /frontend
COPY package*.json .
RUN npm install
COPY . .
# Run tests & Then start
CMD [ "npm",  "start" ]