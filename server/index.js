const express = require('express');
const connectDB = require('./config/mongodb');

const app = express();
app.use(express.json());

// connectDB();

// // Define Routes
// app.use('/api/papers', require('./routes/api/papers'));
// app.use('/api/programs', require('./routes/api/programs'));
// app.use('/api/studyMaterial', require('./routes/api/studyMaterial'));
// app.use('/api/syllabuses', require('./routes/api/syllabuses'));
// app.use('/api/auth', require('./routes/api/auth'));
app.use('/', require('./routes/api/home'));

const port = process.env.PORT || 4000;

app.listen(port, ()=>{console.log(`Listening to port ${port}`)})