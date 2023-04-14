const express = require('express');
const home = require('./routes/home')
const connectDB = require('./config/mongodb');

const app = express();
app.use(express.json());

connectDB();

// // Define Routes
// app.use('/api/papers', require('./routes/api/papers'));
// app.use('/api/programs', require('./routes/api/programs'));
// app.use('/api/studyMaterial', require('./routes/api/studyMaterial'));
// app.use('/api/syllabuses', require('./routes/api/syllabuses'));
// app.use('/api/auth', require('./routes/api/auth'));
app.use('/home', home);
const port = process.env.PORT;

app.listen(port, ()=>{console.log(`Listening to port ${port}`)})