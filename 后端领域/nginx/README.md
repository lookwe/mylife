# nginx静态服务器

## 常用命令
* `nginx -s quit`       优雅停止nginx，有连接时会等连接请求完成再杀死worker进程  
* `nginx -s reload  `   优雅重启，并重新载入配置文件nginx.conf
* `nginx -s reopen `    重新打开日志文件，一般用于切割日志
* `nginx -v `           查看版本  
* `nginx -t  `          检查nginx的配置文件
* `nginx -h`            查看帮助信息
* `nginx -V`            详细版本信息，包括编译参数 
* `nginx  -c filename`  指定配置文件

## 静态资源入口配置
```
location / {
    root   /data/web; 
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
}
```
## Nginx配置代理跨域
```
location ^~ /后端服务名 {
    proxy_pass http://后端服务IP地址:8080;
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Credentials: true;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS,PUT,DELETE;

    proxy_http_version 1.1;
    # 连接延时
    proxy_connect_timeout 3600s;
    proxy_read_timeout 3600s;
    proxy_send_timeout 3600s;
    # IP 穿透
    proxy_set_header        Host $proxy_host;
    proxy_set_header        X-Real-IP $remote_addr;
    proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    # WebSocket 穿透
    proxy_set_header Origin "";
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

## gzip 压缩
```
gzip on;
gzip_min_length  1k;
gzip_buffers     4 16k;
gzip_http_version 1.1;
gzip_comp_level 2;
gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
gzip_vary on;
gzip_proxied   expired no-cache no-store private auth;
gzip_disable   "MSIE [1-6]\.";

limit_conn_zone $binary_remote_addr zone=perip:10m;
limit_conn_zone $server_name zone=perserver:10m;
```