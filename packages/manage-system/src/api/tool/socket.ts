function sockets(){
    const socket = new WebSocket ('ws://localhost:9000')
    socket.addEventListener('open', () => {
       console.log('连接成功')
       socket.send("连接成功啦！")
    })

}
export default sockets