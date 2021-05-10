import websocket = require("ws");
const wsapp = new websocket.Server({
    port:6080
});
wsapp.on("connection",(ws) => {
    console.log(`[SERVER] connection()`);
    ws.on("message",(message) => {
        console.log("输出："+ message);
        ws.send("server:"+message,(err) => {
            console.log(err);
        })
    })
});
