FROM node as builder
WORKDIR '/app'
COPY . .
RUN npm install -g @angular/cli@8.3.26
RUN npm install
RUN ng build --prod


FROM nginx
WORKDIR '/usr/share/nginx/html'
COPY --from=builder ./app/dist/AutoCompleteFrontEnd/ .
COPY ./nginx.conf /etc/nginx/nginx.conf