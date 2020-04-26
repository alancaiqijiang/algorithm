var http = require('http');
// fs模块就是文件系统模块，读取文件、写入文件全靠它
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        // 思路就是用fs模块读取public文件夹中的demo.html文件
        // 文件路径必须以./开头，这是nodejs的规定
        // nodejs是单线程的，这就意味着所有I/O操作（文件读写操作）必须都是异步的
        // readFile函数就是异步函数，异步函数必须有回调函数
        fs.readFile('./test.html', function (err, content) {
            // err是错误对象，如果你有错误，它就不是null
            // content是内容，必须要toString()，否则是十六进制的
            
            res.end(content.toString());
        });
    } else if (req.url == '/qifengle.mp3') {
        fs.readFile('./public/gou.jpg', function (err, content) {
            res.setHeader('content-type', 'image/jpeg');
            res.end(content);
        });
    } else if (req.url == '/css.css') {
        fs.readFile('./public/css.css', function (err, content) {
            res.setHeader('content-type', 'text/css');
            res.end(content);
        });
    }
});

server.listen(3000);