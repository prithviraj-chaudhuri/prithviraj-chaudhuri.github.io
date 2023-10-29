FROM ubuntu

RUN apt-get -y update && apt-get -y install nginx

COPY resources /var/www/html/resources
COPY index.html /var/www/html/index.html

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]