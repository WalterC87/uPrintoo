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
							var smtpTransport = nodemailer.createTransport('SMTP',{
								/*service : "Gmail",
								auth	: {
									user : 'uprintoo@gmail.com',
									pass : 'Printoomkt'
								}*/
								host : "smtp.gmail.com",
								secureConnection: true,
								port : "465 ",
								auth : {
									user : "hola@printoo.me",
									pass : "Printoomail"
								}

							});

							var mailOptions = {
								from : "Equipo uPrintoo",
								to : email,
								subject : "Registro para uPrintoo Beta",
								html : "<div style='width:100%'><div style='margin: 0 auto; padding: 0; width:640px;'><p><strong>Hola, Otra vez: </strong></p> <br> <p> Nos gusta que creas que uPrintoo ser&aacute; la aplicaci&oacute;n web y <br> m&oacute;vil que cambiar&aacute; la forma de imprimir fotograf&iacute;as.</p><div><ul><li>Te olvidas de buscar e ir a un lugar donde imprimir tus fotos.</li><li>Puedes enviar como regalo fotos a quien tu quieras.</li><li>Tomas una foto desde tu celular y la puedes mandar a imprimir.</li></ul></div> <br> <p style='text-align:center'>Espera nuestra versión Beta <br><br> Comparte de nuevo</p> <div> <ul style='list-style:none'> <li style='display:inline-block; margin-lef:15px; vertical-align:top'><a href='https://www.facebook.com/pages/Printoo/1475470072669968' target='_blank'><img src='/img/correo/facebook.png' width='50px' height='50px'></a></li> <li style='display:inline-block; margin-lef:15px; vertical-align:top'><a href='https://twitter.com/printoome' target='_blank'><img src='/img/correo/twitter.png' width='50px' height='50px'></a></li> <li style='display:inline-block; margin-lef:15px; vertical-align:top'><a href='http://instagram.com/printoo.me' target='_blank'><img src='/img/correo/instagram.png' width='50px' height='50px'></a></li> </ul> </div>  <p style='text-align:center'>Atentamente,</p>    <br> <p style='text-align:right'>El equipo uPrintoo</p> <div style='width:100%'><img src='http://printoo.me/img/footer_img.png'/></div>  </div></div>"
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