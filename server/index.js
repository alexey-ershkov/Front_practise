const http = require('http');
const fs = require('fs');
//debug
const debug = require('debug');

const log = debug('*');

//Base server
const server = http.createServer((req, res) => {
    // res.write('Hello');

    // setTimeout(() => {
    //     res.write('Hello again');
    //     res.end();
    // }, 2000)

   log('url: ', req.url);


    //Дополнительно разобраться с роутингом 
    const filename = req.url === '/' ? req.url + 'index.html' : req.url;

    fs.readFile(`public${filename}`, (err, body) => {
        
        //обработка ошибок
        if (err) { 
            log('Error: ' + err);
            res.write('404');
            res.writeHead(404);
            res.end();
            return;
          }
        log('it is callback');
        res.write(body);
        res.end();
    });

})
server.listen(3000);