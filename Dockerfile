FROM node:16.14.2 as builder
WORKDIR /usr/app/mu-admin-web/
# package 及 *.lock 没有变更时 可以缓存 install 结果
COPY package*.json .npmrc ./
RUN npm i && npm run build
# copy 所有源代码
COPY ./dist ./

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/mu-admin-web /usr/app/mu-admin-web
