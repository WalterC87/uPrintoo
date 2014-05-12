var mysql = require('mysql');
var nodemailer = require('nodemailer');
var error;
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
						//function(){
							debugger;
							var smtpTransport = nodemailer.createTransport('SMTP',{
								service : "Gmail",
								auth	: {
									user : 'uprintoo@gmail.com',
									pass : 'Printoomkt'
								}
							});

							var mailOptions = {
								from : "Equipo uPrintoo",
								to : email,
								subject : "Registro para uPrintoo Beta",
								text : "Hola",
								html : "<b>mundo</b>"
							}

							smtpTransport.sendMail(mailOptions, function (err,response){
								if(error){
									console.log(error);
								}else{
									console.log('send mail success');
								}
							});	

						//};

						res.redirect('/registro/share');

					}
				});
			}

		});

	});
};

module.exports = apiController;