var http = require('http');
var fs = require('fs')

var server = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
    if (req.url == '/'){
        fs.readFile('./test.html',function(err,content){
            res.end(content.toString());
        })
    }
})

server.listen(3000)