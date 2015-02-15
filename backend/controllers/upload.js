var fs = require('fs');

module.exports = function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var arquivo = req.files.file;
	var temporario = req.files.file.path;
	var novo = './uploads/' + req.files.file.name;
 	fs.rename(temporario, novo, function(err){
 		if(err){
 			res.status(500).json({error: err})
 		}
 		res.json({message: "enviado com sucesso.", file: novo});
 	})
}