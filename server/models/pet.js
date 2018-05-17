const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
module.exports = ( () => {

    var PetSchema  = new mongoose.Schema({
        name: {type:String, required:[true,'Pet Name is required'],  minlength: [3, 'Name must be greater than 3 characters'], uniqueCaseInsensitive: true, unique: true},
        type: {type:String, required:[true,'Pet Type is required'],  minlength: [3, 'Type must be greater than 3 characters']},
        description: {type:String, required:[true,'Description is required'],  minlength: [3, 'Description must be greater than 3 characters']},
        likes: {type: Number, default: 0},
        skills: [{type: String}]
    }, {timestamps: true});
    PetSchema.plugin(uniqueValidator, { message: '{PATH} is already exist' });
    mongoose.model('Pet', PetSchema);
})();