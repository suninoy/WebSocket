var ws = require("nodejs-websocket")
var port = 7001;
var clientCount = 0;
var server = ws.createServer(function (conn) {
    console.log("new connection");
    clientCount++;
    conn.nickName = 'user' + clientCount;
    var mes= {};
    mes.type="enter";
    mes.data = conn.nickName+" comes in";
    var message = JSON.stringify(mes);
    boardcast(message)
    conn.on("text", function (str) {
        console.log("Received" + str);
        var mes= {};
        mes.type="message";
        mes.data =conn.nickName+":"+ str;
        var message = JSON.stringify(mes);
        boardcast(message)
        //conn.sendText(str)
    })
    conn.on("close", function (code, reason) {
        var mes= {};
        mes.type="leave";
        mes.data = conn.nickName+" leave";
        var message = JSON.stringify(mes);
        boardcast(message);
        console.log("Connection closed")
    })
    conn.on("error", function (err) {
        console.log("handle err")
        console.log(err);
    })
}).listen(port)

console.log("WebSocket Server has Connected successfully on port " + port)

function boardcast(str) {
    server.connections.forEach(function (connection) {
        connection.sendText(str)
    })
}