// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Entry = require('./entryModel'); // Import the entry model

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/moneyTracker', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/entries', async(req, res) => {
    try {
        const entries = await Entry.find();
        res.json(entries);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/add-entry', async(req, res) => {
    const { type, name, amount } = req.body;

    try {
        const newEntry = new Entry({ type, name, amount });
        await newEntry.save();
        res.status(201).send('Entry added successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Add routes for updating and deleting entries as needed

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});