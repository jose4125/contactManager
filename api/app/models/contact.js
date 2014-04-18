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
exports.create = function( req, callback ) {

  console.log( 'model create contact' );
  console.log( 'model', req );
  var contact = new Contact( req );
  contact.save( function( error ) {
      if( error ) {
        console.log( 'cant add the contact', error );
        error.status = 'cant add contact';
        callback( error, null );
      }else{
        console.log( 'added a contact' );
        callback( null, contact );
      }
  } );
}