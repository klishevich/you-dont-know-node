var events  = require('events')
var emitter = new events.EventEmitter()

emitter.once('knock1', function() {
  console.log('Go away!')
})

emitter.on('knock', function() {
  console.log('Who\'s there?')
})

emitter.emit('knock')
emitter.emit('knock1')