import http from 'http';

// const server = http.createServer((req, res) => {
//     console.log(Math.floor("Hi" + Math.floor(Math.random()* 100)));
//     res.write("random number: ");
//     res.end(Math.floor(Math.random()* 100));
// });

// server.listen(8081);

function requestHandler(request, response) {
    const randomNumber = Math.random();
    response.end(randomNumber.toString());
}

const myServer = http.createServer(requestHandler);

myServer.listen(8081);





