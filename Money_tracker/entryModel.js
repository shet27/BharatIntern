// entryModel.js
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    type: Number,
    name: String,
    amount: Number,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;