const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'dilionagungjaya',
    password: 'password',
    database: 'dilionagungjaya'
})

async function connectClient(){
    await client.connect()
        .then(() => console.log('Connected to Postgre'))
        .catch(e => console.error('Connection Error', e.stack));
}
connectClient();

const port = process.env.PORT || 3000;
  
// let namakategori = [];
// let loop = 0;


const server = http.createServer((req, res) => {
    switch(req.method){
        case 'GET':
            if(req.url === '/'){
                fs.readFile('./public/index.html', (err, data)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                });
            }
            else if(req.url === '/kategori'){
                async function getListKategori() {
                    await client.query("SELECT namakategori FROM msKategori")
                        .then(result => {
                            res.writeHead(200, {'Content-Type': 'application/json'});
                            res.write(JSON.stringify(result.rows));
                            res.end();
                        })
                        .catch(e => console.error(e.stack))
                        //END CLIENT
                        // .then(() => {
                        //     console.log('Ending Connection..');
                        //     client.end((err) => {
                        //         if (err) {
                        //             console.log('error during disconnection', err.stack)
                        //         }
                        //         else{
                        //             console.log('Client has disconnected')
                        //         }
                        //     });
                        // });
                }
                getListKategori();
            }
            else if(req.url.match('\.html$')){
                let htmlPath = path.join(__dirname, 'public', req.url);
                fs.readFile(htmlPath, (err, data)=>{
                    res.writeHead(200, {'Content-type': 'text/html'});
                    res.end(data);
                });
            }
            else if(req.url.match('\.css$')){
                let cssPath = path.join(__dirname, 'public', req.url);
                let fileStream = fs.createReadStream(cssPath);
                res.writeHead(200, {'Content-type': 'text/css'});
                fileStream.pipe(res);
            }
            else if(req.url.match('\.js$')){
                let htmlPath = path.join(__dirname, 'public', req.url);
                fs.readFile(htmlPath, (err, data)=>{
                    res.writeHead(200, {'Content-type': 'text/javascript'});
                    res.end(data);
                });
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
            break;
    }
  });
  
  server.listen(port, function(){
    console.log('Node version in use: ' + process.version);
    console.log(`Server running at ${port}`);
  });