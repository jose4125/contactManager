var mongoose = require( 'mongoose' ),
  // Contact = mongoose.model('Contact');
  Contact = require( '../models/contact' );

exports.index = function(req, res){
  Contact.index( function( error, contacts ) {
    if( error ) throw error;
    res.json( 200, contacts)
  });
}

exports.create = function( req, res ) {
  console.log( 'req', req.body );
  console.log( 'req body', req.body );
  Contact.create( req.body, function( error, contact ) {
    if( error ) throw error;
    res.json( 200, contact );
  })
}