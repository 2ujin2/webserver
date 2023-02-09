const http = require('http');
const fs = require('fs').promises;

const server1 = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server 8080!</p>');
});

const server2 = http.createServer(async(req,res) => {
    try{
        const data = await fs.readFile('./form.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(data);
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(err.message);
    }
    

    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server 8081!</p>');
});

server1.listen(8080);

server1.on('listening',() =>{
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
server1.on('error',(error) => {
    console.error(error);
});


server2.listen(8081);

server2.on('listening',() =>{
    console.log('8081번 포트에서 서버 대기 중입니다!');
});
server2.on('error',(error) => {
    console.error(error);
});
