import http from 'http';

const server = http.createServer((req, res) => {
    console.log(Math.floor(Math.random()* 100, "Hi"));
    res.write("random number: ");
    res.end(Math.floor(Math.random()* 100));
});

server.listen(8081);