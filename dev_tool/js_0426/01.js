// 需要一个http

var http = require('http');
// 创建一个服务器,用createServer方法
//  采用一个回调函数，req表示请求，res表示响应；
var server = http.createServer(function (req, res) {
    // 如果需要使用中文，则需要设置一个头部
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')

    res.write('<h1>Hello, world</h1>');
    
    res.end('');
})

server.listen(3000);