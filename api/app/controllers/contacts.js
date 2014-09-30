var mongoose = require( 'mongoose' ),
  // Contact = mongoose.model('Contact');
    Contact = require( '../models/contact' ),
    RandomePass = require( 'password-generator' );

// exports.index = function(req, res){
//   Contact.index( function( error, contacts ) {
//     if( error ){ 
//       res.json( error );
//     }else{
//       res.json( 200, contacts)
//     }
//   });
// }

// exports.create = function( req, res ) {
//   console.log( 'req', req.body );
//   console.log( 'req body', req.body );
//   Contact.create( req.body, function( error, contact ) {
//     if( error ) {
//       res.json( error );
//     }else{
//       res.json( 200, contact );
//     }
//   })
// }

// var oldPass = function( req, res ) {
//   self = this;
//   console.log( 'req', req.body );
//   var old_pass= RandomePass(12, false);
//   req.body.old_password = old_pass;
//   // req.body.old_password = 'Yw4idUlgB6VQ';
//   console.log( 'req body', req.body );
//   edit( req.body, res );
// }

// var edit = function( req, res ) {
//   console.log( 'req body edit', req.user_name );
//   Contact.findOne( { user_name: req.user_name}, function( error, contact) {
//     if( error ) {
//       res.json( error );
//     }else{
//       res.json( 200, contact );
//     }
//   } )
// }
module.exports = Contacts = {
  index: function( req, res ){
    Contact.index( function( error, contacts ) {
      if( error ){ 
        res.json( error );
      }else{
        res.json( 200, contacts)
      }
    });
  },
  allAdmin: function( req, res ){
    Contact.allAdmin( function( error, contacts ) {
      if( error ){ 
        res.json( error );
      }else{
        res.json( 200, contacts)
      }
    });
  },

  show: function( req, res ) {
    console.log( 'username', req.params.user_name );
    Contact.show( req.params.user_name, function( error, contact ){
      if( error ){
        res.json( error );
      }else{
        res.json( 200, contact );
      }
    } );
  },

  create: function( req, res ) {
    console.log( 'req', req.body );
    console.log( 'req body', req.body );
    var contact = Contacts.oldPass( req.body );
    Contact.create( contact, function( error, contact ) {
      if( error ) {
        res.json( error );
      }else{
        res.json( 200, contact );
      }
    })
  },

  oldPass: function( req ) {
    console.log( 'req', req );
    var old_pass= RandomePass(12, false);
    var contact = req;
    contact.old_password = old_pass;
    // req.body.old_password = 'Yw4idUlgB6VQ';
    console.log( 'req body', req );
    return contact;
    // Contacts.edit( req.body, res );
  },

  edit: function( req, res ) {
    console.log( 'req param edit', req.params.user_name );
    Contact.edit( req, function( error, contact) {
      if( error ) {
        res.json( error );
      }else{
        res.json( 200, contact );
      }
    } );
  },

  destroy: function( req, res ){
    Contact.destroy( req.params.user_name, function( error, contact ){
      if( error ){
        res.json( error );
      }else{
        res.json( 200, contact );
      }
    })
  }
}