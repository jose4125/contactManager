module.exports = function(app){

	//home route
	var contacts = require('../app/controllers/contacts');
	app.get('/', contacts.index);
  app.post('/contact', contacts.create);

};
