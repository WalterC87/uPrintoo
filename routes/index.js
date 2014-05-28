
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Printoo | Manda a imprimir y recibe en tu casa tus fotos. Sin pagar nada.' });
};

exports.privacidad = function(req,res){
	res.render('privacidad', {title : 'Printoo | Terminos de Privacidad'});
};

exports.terminos_condiciones = function(req,res){
	res.render('terminos_condiciones', {title : 'Printoo | Terminos de Privacidad'});
};

exports.registro_share = function(req,res){
	res.render('success', {title : 'Printoo | Comparte y apoya'});
};

exports.registro_existe = function(req,res){
	res.render('existe', {title : 'Printoo | Ya eres parte de este nosotros'});
};

/*exports.notfound = function(req,res){
	res.render('404', {title : 'uPrintoo | pagina no existe'});
}*/