const express = require('express');
const path = require('path');
const db = require('./db/db.json')
const idNumber = require('./helpers/uuid');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

//initialize methods
const app = express();



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json(db)
})

app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: idNumber(),
        };

        console.log(newNote)

        db.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
            (err) ? console.log(err) : console.log('success')
        })


        res.status(201).json(newNote);
    } else {
        res.status(500).json('Error in saving your note');
    }
}
)

app.delete('/api/notes/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    for (i = 0; i < db.length; i++) {
        if (id === db[i].id) {
            db.splice(i, 1);
            fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
                (err) ? console.log(err) : console.log("Note deleted")
            })
            res.status(201).json(db);
            return;
        } 
    }
            res.status(500).json('Error in deleting your note');
        
        
    }
        )

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
