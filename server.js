const express = require('express');
const path = require('path');
const db = require('./db/db.json')
const generateUniqueId = require('generate-unique-id');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

//initialize methods
const app = express();
const id = generateUniqueId();

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
    const {title, text} = req.body;
    console.log(title)
    if(title && text) {
        const newNote = {
            title,
            text,
            id: generateUniqueId(),
        };
        
        console.log(newNote)
        fs.appendFile(db, newNote, (err) => {
            (err) ? console.log(err) : console.log('success')
        })
      
          
          res.status(201).json(newNote);
        } else {
          res.status(500).json('Error in posting review');
        }
        // console.log(newNote)
        // fs.appendFile(db, newNote, (err) => {
        //     (err) ? console.log(err) : console.log('success')
        // })
    }
)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
