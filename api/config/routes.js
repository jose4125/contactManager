module.exports = function(app){

	//home route
	var contacts = require('../app/controllers/contacts');
  app.get( '/contact', contacts.index );
  app.post( '/contact', contacts.create );
  app.put( '/contact/:user_name', contacts.edit )
};
