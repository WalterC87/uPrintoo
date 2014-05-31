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
								html : "<div style='width:100%'><div style='margin: 0 auto; padding: 0; width:640px;'><p><strong>Hola:</strong></p> <br><p style='text-align:left; font-size:18px'> Gracias por confiar en nuestra empresa; estamos prepar&aacute;ndonos d&iacute;a a d&iacute;a para lograr que <strong>Printoo</strong> sea la aplicaci&oacute;n m&oacute;vil y web m&aacute;s usada de impresi&oacute;n de fotos en M&eacute;xico y el mundo..</p><br> <p style='text-align:left'>ESPERA NUESTRA VERSI&Oacute;N BETA <br><br>COMPARTE</p> <div style='margin:0 auto; padding: 0; width: 350px'> <ul style='list-style:none'> <li style='display:inline-block; margin-left:15px; vertical-align:top'><a href='https://www.facebook.com/pages/Printoo/1475470072669968' target='_blank'><img src='http://printoo.me/img/correo/facebook.png' width='70px' height='70px'></a></li> <li style='display:inline-block; margin-left:15px; vertical-align:top'><a href='https://twitter.com/printoome' target='_blank'><img src='http://printoo.me/img/correo/twitter.png' width='70px' height='70px'></a></li> <li style='display:inline-block; margin-left:15px; vertical-align:top'><a href='http://instagram.com/printoo.me' target='_blank'><img src='http://printoo.me/img/correo/instagram.png' width='70px' height='70px'></a></li> </ul> </div>  <p style='text-align:left'>ATENTAMENTE,</p>    <br> <p style='text-align:left'>Jos&eacute; Miguel Sainz <br> CEO & Co-founder</p> <div style='width:100%'><img src='http://printoo.me/img/footer_printoo.jpg'/></div>  </div></div>"
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