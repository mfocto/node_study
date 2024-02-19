const http = require('http');

/*
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>HelloNode!</h1>');
    res.end('<p>Hello Server!</p>')
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중!')
    })*/

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>HelloNode!</h1>');
    res.end('<p>Hello Server!</p>');
});

server.listen(8080);

server.on('listening', () => {
    console.log('8080 서버 대기 중')
});
server.on('error', (err) => {
    console.log(err);
})
