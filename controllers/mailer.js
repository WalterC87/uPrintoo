var nodemailer = require('nodemailer');
var error;

var smtpTransport = nodemailer.createTransport('SMTP',{
	service : "Gmail",
	auth	: {
		user : 'uprintoo@gmail.com',
		pass : 'Printoomkt'
	}
});

var mailOptions = {
	from : "",
	to : "",
	subject : "Registro para uPrintoo Beta",
	text : "",
	html : ""
}

smtpTransport.sendMail(mailOptions, function (err,response){
	if(error){
		console.log(error);
	}else{
		console.log('send mail success');
	}
});