const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    name: String,
    says: String,
    localdate1: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Comment', CommentSchema);