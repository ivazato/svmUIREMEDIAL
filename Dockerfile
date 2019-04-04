FROM node:10.6.0
RUN npm install -g @angular/cli@1.7.4
RUN mkdir /code
WORKDIR /code
COPY package*.json /code/
ADD . /code/
RUN npm install
CMD ["ng","serve","--host","0.0.0.0","--port","4200"]
