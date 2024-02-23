var http = require ('http')

http.createServer(function(res,res){
    res.end("Mensagem de Texto")
}).listen(8081)

console.log("Servidor Ativo")