const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,   //Saves the URL of the image to store in the app, which is a string.
    sport: String,
    date: Date,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{
    toJSON: {
        virtuals: true
    }
});

EventSchema.virtual("thumbnail_url").get(function () { return `http://localhost:8000/files/${this.thumbnail}` })

module.exports = mongoose.model('Event', EventSchema)