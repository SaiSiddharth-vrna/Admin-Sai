FROM node:14.18.3 as build-stage
RUN apt-get update && apt-get -y upgrade
RUN apt-get  install libc6 -y
RUN apt-get  install  curl -y
RUN apt-get install -y procps
RUN apt-get install -y tcpdump
RUN apt-get install net-tools

WORKDIR /app

COPY package*.json /app/

RUN npm cache clean -f

RUN npm install

COPY ./ /app/


RUN npm run build 




FROM nginx:1.19
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html/
#Copy default nginx configuration
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./vrnaplex.key /etc/ssl/
#COPY ./full-vrnaplex.cer /etc/ssl/
COPY ./vrnaplex.crt /etc/ssl/
COPY ./www.nonprod-stag.vrnaplex.com.conf /etc/ssl/
RUN ls -lrt /etc/ssl/
COPY ./nginx.conf /etc/nginx/conf.d
RUN cat /etc/nginx/conf.d/nginx.conf
