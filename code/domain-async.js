var d = require('domain').create();

d.on('error', (e) => {
   console.log('Custom Error: ' + e);
});
d.run(() => {
  setTimeout(() => {
    throw new Error('Failed!');
  }, Math.round(Math.random()*100));
});
