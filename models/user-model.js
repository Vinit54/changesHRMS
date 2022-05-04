
const mongoose = require('mongoose');
const { Schema } = mongoose;
// Setup the schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export User model
const User = mongoose.model('user', userSchema);
module.exports = User;