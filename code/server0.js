const http = require('http');
const server = http.createServer((req,res) => {
  req.setEncoding('utf-8');
  req.on('data', (chunk) => {
    console.log('chunk', chunk);
    let transformedChunk = 'Reply: ' + chunk + '\n';
    res.write(transformedChunk);
  });
  req.on('end', () => res.end());
})

server.listen(1337);
