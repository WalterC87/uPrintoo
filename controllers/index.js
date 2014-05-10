var routes = require('../routes');
var user = require('../routes/user');

var indexController = function(app){
	app.get('/', routes.index);
	app.get('/users', user.list);
	app.get('/privacidad', routes.privacidad);
	app.get('/terminos_condiciones', routes.terminos_condiciones);
	app.get('/registro/share', routes.registro_share)
	app.get('/registro/existe', routes.registro_existe)

	//app.get('*', routes.index.notfound);
}

module.exports=indexController;