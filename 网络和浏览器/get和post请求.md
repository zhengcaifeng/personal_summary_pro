https://www.w3school.com.cn/tags/html_ref_httpmethods.asp

get 和 post 请求方法的区别

1. 从对数据长度的限制，get 有限制的，方法发送的请求，参数是添加在 url 中的，而 url 是有长度限制的，最大长度是 2048 个字符， post 无限制

2 .在安全性方面，post 请求会更安全，当请求数据时，get 方法请求的参数是 url 的一部分，是可以被看到的，如果发送的是密码或敏感信息就会泄漏，
而 post 请求数据包的消息体 Request Payload

缓存： 浏览器历史 get 请求可以被缓存同时参数可以保留在浏览器历史中，而 post 不能缓存参数也不会保存在浏览器历史中
标签
