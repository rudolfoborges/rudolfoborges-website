FROM nginx

RUN  mkdir -p /opt/sites/rudolfoborges/assets

COPY rudolfoborges.conf /etc/nginx/conf.d
COPY gzip.conf /etc/nginx/conf.d

COPY . /opt/sites/rudolfoborges

EXPOSE 80
EXPOSE 443
