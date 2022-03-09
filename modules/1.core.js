const http = require('http')
const url = require('url')

http.createServer(function(req, res){
        const address = 'http://localhost:3001' + req.url
        const urlParser = url.parse(address, true);
        const responseObj = {
            host: urlParser.host,
            pathName : urlParser.pathname,
            search: urlParser.search
        }
        console.log(JSON.stringify(responseObj))
        if(req.url == "/"){
            res.end("Wlecome to NodeJS")
        } else if(req.url == "/user"){
            res.end(responseObj)
        } else if(req.url == "/employee"){
            res.end(responseObj)
        } else {
            res.end("<h1><i>Hello Guest</i></h1>")
        }     
}).listen(3001)

// const url = require('url')
// var address = 'http://localhost:8080/default.htm?year=2017&month=february';
// var urlParser = url.parse(address, true);

// console.log(urlParser.host)
// console.log(urlParser.pathname)
// console.log(urlParser.search)
// console.log(urlParser.query.year)
// console.log(urlParser.query.month)
