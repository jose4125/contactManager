var mongoose = require( 'mongoose' ),
    validate = require('mongoose-validate'),
    Schema = mongoose.Schema;

module.exports = function (){
  var Contact = new Schema({
    photo: String,
    user_name: { type: String, unique: true, required: true },
    first_name: String,
    last_name: String,
    identification_number: Number,
    cel_phone: Number,
    emergency_phone: Number,
    rokk3r_mail: { type: String, validate: [validate.email, 'invalid email address'] },
    role: Array,
    personal_mail: { type: String, validate: [validate.email, 'invalid email address'] },
    skype: String,
    pivotal: String,
    birthday: Number,
    password: String,
    old_password: { type: String, unique: true },
    credentials: {
      access_token: String,
      expirate_at: Date
    },
    state: { type: Boolean, default: 1 }

  });

  return mongoose.model( 'Contact', Contact );
}