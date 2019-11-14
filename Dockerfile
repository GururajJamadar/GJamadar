FROM node:11-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install --save bootstrap@4 @angular/material @angular/cdk @angular/animations 
RUN npm install --save ng2-search-filter
RUN npm install --save ngx-filter-pipe
RUN npm install --save ng2-order-pipe
RUN npm install --save angular-checklist
RUN npm install  angular2-multiselect-dropdown
RUN npm install  @ng-bootstrap/ng-bootstrap
RUN npm install --save ngx-pagination
RUN npm install recordrtc --save
RUN npm install --save sweetalert
RUN $(npm bin)/ng build 
# stage 2
FROM nginx:1.13.12-alpine
COPY --from=node /app/dist/glearnfrontend /usr/share/nginx/html


