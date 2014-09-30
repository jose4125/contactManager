// Example model

var mongoose = require('mongoose'),
    Contact = require( '../schemas/contact.js' )();

exports.index = function(callback) {
  Contact.find( function( error, contacts ) {
    if( error ) {
      callback( error, null )
    }else{
      callback( null, contacts );
    }
  })
}
exports.allAdmin = function(callback) {
  Contact.find({}, { user_name: 1, first_name: 1, last_name: 1, old_password:1 }, function( error, contacts ) {
    if( error ) {
      callback( error, null )
    }else{
      callback( null, contacts );
    }
  })
}
exports.show = function( req, callback ){
  console.log( 'username', req );
  var query = {user_name: req };
  Contact.findOne( query, function( error, contact ){
    if( error ){
      callback( error, null );
    }else{
      callback( null, contact );
    }
  } )
}
exports.create = function( req, callback ) {

  self = this;
  console.log( 'model create contact' );
  console.log( 'model', req );
  var contact = new Contact( req );
  contact.save( function( error ) {
      if( error ) {
        console.log( 'cant add the contact', error );
        if(error.code === 11000){
          console.log( 'repetida' ); 
          self.create( req, callback);
        }
        error.status = 'cant add contact';
        callback( error, null );
      }else{
        console.log( 'added a contact' );
        callback( null, contact );
      }
  } );
}

exports.edit = function( req, callback ) {

  var query = { user_name: req.params.user_name };
  var update = { user_name: req.body.user_name };
  var options = {};
  Contact.findOneAndUpdate(query, update, options, function (error , contact) {
    if (error) {
      callback( error, null );
    }else{
      console.log('cat', contact);
      callback( null, contact );
    }
  });
}
exports.destroy = function( req, callback ){
  var query = { user_name: req };
  Contact.remove( query, function( error, contact) {
    if( error ){
      callback( error, null );
    }else{
      callback( null, contact );
    }
  } );
}