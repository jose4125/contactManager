var mongoose = require( 'mongoose' ),
  // Contact = mongoose.model('Contact');
  Contact = require( '../models/contact' );

exports.index = function(req, res){
  res.json(200, {hola: 'hola', mundo: 'mundo'});
};

exports.create = function( req, res ) {
  console.log( 'req', req.body );
  console.log( 'req body', req.body );
  Contact.create( req.body, function( contact ) {
    res.json( 200, contact );
  })
}