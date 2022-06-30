const express = require('express');
require('dotenv').config();
console.log('this is port ', process.env.PORT);
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://memgos:1wZYisZslVQHNR0z@cluster0.jta1g.mongodb.net/nicponDialogs?retryWrites=true&w=majority')

//mongoose.connect('mongodb://localhost/nicponDialogs');
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', ()=> console.log('Connected to Database'));



const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const apiRouter = require('./routes/api');
app.use('/',apiRouter);

app.get('/favico.ico', (req, res) => {
  res.sendStatus(404);
});
const PORT = parseInt(process.env.PORT) || 3000;
app.listen(PORT, () => console.log(`Example app is listening on port ${process.env.PORT}.`));
