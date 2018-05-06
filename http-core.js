const http = require('http');

http.createServer((req, res) => {
    let obj = {
        nombre: 'Hugo',
        edad: 33,
        url: req.url
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(obj));
    res.end();
}).listen(8080);

console.log(`Escuchando el puerto 8080`);