const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of the data we're going to put into
    the database.
    
    @author Andy Yang
*/
const ListSchema = new Schema(
    {
        title: { type: String, required: true, unique:true },
        type: { type: String},
        genre: { type: String},
        content: { type: Array},
    },
    { timestamps: true },
)

module.exports = mongoose.model('List', ListSchema)
