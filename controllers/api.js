var mysql = require('mysql');
var connection = mysql.createPool({
				 	host : 'localhost',
				 	user : 'root',
				 	password : 'root',
				 	database : 'uprintoo'
             	});

var apiController = function(app){
	app.post('/registro/newlester', function(req,res){
		email = req.body.txtMail;
		estado = 1;

		connection.getConnection(function(err,conn){
			if(err){
				console.log(err);
				res.statusCode = 500;
				
				res.send({
					result : 'error',
					err : err.code
				});
				
			}else{
				conn.query("INSERT INTO newlester(idNewlester,email,fechaRegistro,estado) VALUES(NULL,'"+email+"',NOW(),"+estado+")", function(err,rows,field){
					if(err){
						/*res.send({
							result : 'error',
							err : err.code
						});*/
						res.redirect('/registro/existe');
					}else{
						console.log('success');
						res.redirect('/registro/share');

					}
				});
			}

		});

	});
};

module.exports = apiController;