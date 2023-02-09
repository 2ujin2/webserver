const http = require('http');
const fs = require('fs').promises;
 
const users = {};

http.createServer(async (req,res) => {
    try{
        if(req.method === 'GET') {
            if(req.url === '/') {
                const data = await fs.readFile('./main.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/prob1'){
                const data = await fs.readFile('./test1.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/prob2'){
                const data = await fs.readFile('./test2.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/prob3'){
                const data = await fs.readFile('./test3.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/prob4'){
                const data = await fs.readFile('./test4.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/prob5'){
                const data = await fs.readFile('./test5.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                //404 error
            }
        }
    } catch (err){
        console.error(err);
        res.writeHead(500,{'Content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
}).listen(8080,() => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
    });