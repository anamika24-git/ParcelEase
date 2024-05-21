FROM node:alpine
WORKDIR /frontend
COPY . .
RUN npm install
# Run tests & Then start
CMD [ "npm", "run", "test_start" ]
