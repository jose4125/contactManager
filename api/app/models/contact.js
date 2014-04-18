// Example model

var mongoose = require('mongoose'),
    Contact = require( '../schemas/contact.js' )();

exports.create = function( req, callback ) {

  console.log( 'model create contact' );
  console.log( 'model', req );
  var contact = new Contact( req );
  contact.save( function( error ) {
      if( error ) {
        console.log( 'cant add the contact', error );
        error.status = 'cant add contact';
        callback( error );
      }else{
        console.log( 'added a contact' );
        callback( contact );
      }
  } );
}