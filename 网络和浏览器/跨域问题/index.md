解决方式 

1.jsonp

2.cors  (跨域资源共享)

3.使用代理 

 3.1 nginx 反向代理接口跨域

3.2  node 中间件代理 

vue-cli的proxyTable用的是 http-proxy-middleware 中间件  ，

原理：该中间件本质上是在本地开了一个服务器dev-server，所有的请求都通过这里转发出去，即把浏览器的发送请求代理转发到代理服务器上，再由代理服务器发送请求给目标服务器，从而解决跨域问题。

csdn:https://blog.csdn.net/weixin_44116302/article/details/105420071

4.WebSocket 协议跨域







