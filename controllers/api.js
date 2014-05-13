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
								html : "<div style='width:100%'><div style='margin: 0 auto; padding: 0; width:640px;'><p><strong>Hola, Otra vez: </strong></p> <br> <p> De nuevo gracias por creer que uPrintoo será la aplicación web y móvil que cambiará la forma de imprimir fotografías.</p><br> <p>Toma una foto e inmediatamente  imprímela y recíbela gratis. <br><br> Puedes imprimir y enviar fotos para alguien más si así lo prefieres. <br><br> Jamás volverás a perder fotografías, mejor imprímelas.</p> <br><br><br> <p style='text-align:center'>Espera nuestra versión Beta</p> <p style='text-align:right'>Comparte de nuevo</p> <br> <p style='text-align:right'>El equipo uPrintoo</p> <div style='width:100%'><img src='/img/footer_img.png'/></div>  </div></div>"
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