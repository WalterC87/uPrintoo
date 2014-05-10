
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'uPrintoo | Fotografías y más' });
};

exports.privacidad = function(req,res){
	res.render('privacidad', {title : 'uPrintoo | Terminos de Privacidad'});
};

exports.terminos_condiciones = function(req,res){
	res.render('terminos_condiciones', {title : 'uPrintoo | Terminos de Privacidad'});
};

exports.registro_share = function(req,res){
	res.render('success', {title : 'uPrintoo | Comparte y apoya'});
};

exports.registro_existe = function(req,res){
	res.render('existe', {title : 'uPrintoo | Ya eres parte de este nosotros'});
};

/*exports.notfound = function(req,res){
	res.render('404', {title : 'uPrintoo | pagina no existe'});
}*/