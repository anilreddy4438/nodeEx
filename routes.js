

function authenticated(req, rex, next){
	console.log('came in authenticated');
	next()
}
module.exports = function(app) {
	app.use('/user',authenticated, require('./user'))
	// body...
}