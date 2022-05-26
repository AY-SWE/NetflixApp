const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of the data we're going to put into
    the database.
    
    @author Andy Yang
*/
const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique:true },
        email: { type: String, required: true },
        passwordHash: { type: String, required: true },
        profilePic: { type: String, default: "" },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)
