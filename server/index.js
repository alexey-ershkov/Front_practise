const http = require('http');
const fs = require('fs');

//Base server
const server = http.createServer((req, res) => {
    // res.write('Hello');

    // setTimeout(() => {
    //     res.write('Hello again');
    //     res.end();
    // }, 2000)

    console.log('url: ', req.url);


    //Дополнительно разобраться с роутингом 
    const filename = req.url === '/' ? req.url + 'index.html' : req.url;

    fs.readFile(`public${filename}`, (err, body) => {
        
        //обработка ошибок
        if (err) { 
            console.log('Error: ' + err);
            res.write('404');
            res.writeHead(404);
            res.end();
            return;
          }

        console.log('it is callback', body);
        res.write(body);
        res.end();
    });

    console.log('theres no block ');

})
server.listen(3000);