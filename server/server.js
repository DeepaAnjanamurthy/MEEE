const express = require('express');
// const morgan = require('morgan');
const cors = require('cors');
const app = express();

// create const variable for Route here
const chakrasRoute = require('./routes/chakrasRoute');
// const notesRoute = require('./routes/notesRoute');
// const usersRoute = require('./routes/usersRoute');

require('dotenv').config();

const PORT = process.env.PORT;

// app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/chakras', chakrasRoute);
// app.use('/notes', notesRoute);
// app.use('/users', usersRoute);

app.get('/', (req, res)=>{
    res.json({
        greeting: "Welcome to my API!"
    });
});


app.listen(PORT, console.log(`Server listening at: http://localhost:${PORT}`));
