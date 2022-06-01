const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of the data we're going to put into
    the database.
    
    @author Andy Yang
*/
const MovieSchema = new Schema(
    {
        title: { type: String, required: true, unique:true },
        description: { type: String, required: true },
        img: { type: String},
        imgTitle: { type: String},
        imgBackGround: { type: String},
        trailer:{type: String},
        video: { type: String},
        year: { type: String},
        genre: { type: String},
        limit: { type: Number},
        isSeries: {type: Boolean, default: false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Movie', MovieSchema)
