var mongoose = require( 'mongoose' ),
    Schema = mongoose.Schema;

module.exports = function (){
  var Contact = new Schema({
    photo: String,
    first_name: String,
    last_name: String,
    identification_number: Number,
    cel_phone: Number,
    emergency_phone: Number,
    rokk3r_mail: String,
    role: Array,
    personal_mail: String,
    skype: String,
    pivotal: String,
    birthday: Number,
    password: String,
    old_password: String,
    credentials: {
      access_token: String,
      expirate_at: Date
    } 

  });

  return mongoose.model( 'Contact', Contact );
}