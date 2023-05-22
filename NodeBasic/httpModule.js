const http = require('http');

const HttpModule = () => {
const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', "text/plain");
    res.end("Hello Node Developer")     // will be written on browser 
});

// server.listen(3001, () => {
//     console.log('port is running')
// })

}

module.exports = {HttpModule}