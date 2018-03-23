var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("<p>Olá</p>");
})

app.listen(8000, function(){
	console.log("Servidor Rodando");
});