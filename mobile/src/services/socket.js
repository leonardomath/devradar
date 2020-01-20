import socketio from 'socket.io-client'

const socket = socketio('http://192.168.0.10:3333', {
  autoConnect: false
})

function subscribeNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction)
  // console.log('novo dev cadastrado')
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }

  socket.connect()
}

function disconnect() {
  if(socket.connected) {
    socket.disconnect()
  }
}

export {
  disconnect,
  connect,
  subscribeNewDevs
}