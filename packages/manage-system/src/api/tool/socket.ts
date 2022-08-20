function sockets(){
    const socket = new WebSocket ('localhost:9000')
    socket.addEventListener('open', () => {
       console.log('连接成功')
    })
}
export default sockets