module.exports = function(app){

	//home route
	var contacts = require('../app/controllers/contacts');
  app.get( '/contact', contacts.index );
  app.get( '/admincontact', contacts.allAdmin );
  app.get( '/contact/:user_name', contacts.show );
  app.post( '/contact', contacts.create );
  app.put( '/contact/:user_name', contacts.edit )
  app.delete( '/contact/:user_name', contacts.destroy )
};
