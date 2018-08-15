const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('./public/index.html', (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if(req.url.match('\.css$')){
        let cssPath = path.join(__dirname, 'public', req.url);
        let fileStream = fs.createReadStream(cssPath);
        res.writeHead(200, {'Content-type': 'text/css'});
        fileStream.pipe(res);
    }
    else if(req.url.match('\.png$')){
        let pngPath = path.join(__dirname, 'public', req.url);
        let fileStream = fs.createReadStream(pngPath);
        res.writeHead(200, {'Content-type': 'image/png'});
        fileStream.pipe(res);
    }
    else if(req.url.match('\.jpg$')){
        let pngPath = path.join(__dirname, 'public', req.url);
        let fileStream = fs.createReadStream(pngPath);
        res.writeHead(200, {'Content-type': 'image/jpg'});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('No Page Found');
    }
  }).listen(port);
  
  server.listen(port, hostname, () => {
    console.log('Node version in use: ' + process.version);
    console.log(`Server running at ${port}`);
  });
