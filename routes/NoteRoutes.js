
const noteModel = require('../models/Notes.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async(req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    let note = {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: Date.now(),
        dateUpdated: Date.now()
    }
    let newNote = new noteModel(note);
    try{
        await noteModel.save(newNote);
        res.status(200).send('Note record saved');
    } catch(err){
        res.status(500).send({message: "Note content can not be empty"})
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    noteModel.find({}, function(err, notes) {
        var listOfNotes = {};
        if(err){
            res.status(500).send(err);
        }
        notes.forEach(function(note) {
          listOfNotes = note;
        });
        res.send(listOfNotes);  
      });
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try{
        let foundModel = noteModel.findById(req.params.noteId);
        res.status(200).send(foundModel);
    } catch(err){
        res.status(500).send(err);
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try{
        noteModel.findByIdAndUpdate(req.params.noteId, {"noteTitle" : "Updated title"});
        res.status(200).send('Field updated');
    }catch(err){
        res.status(500).send('Note cant be found');
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    noteModel.findByIdAndRemove(req.params.noteId, function (err, success){
        if(err){
            res.status(500).send({message: 'Note couldnt be found'});
        }
        else{
            res.status(200).send('Deleted ' + success);
        }
    });
});
