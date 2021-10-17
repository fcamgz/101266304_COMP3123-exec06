const { Schema } = require('mongoose');
const mongoose = require('mongoose');
//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const notesSchema = new Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {type: String, enum: ['HIGH', 'MEDIUM', 'LOW']},
    dateAdded: Date,
    dateUpdated: Date
});

const Notes = mongoose.model('Notes', notesSchema);
module.exports = Notes;