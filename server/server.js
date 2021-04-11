const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
// const authorize = 

// create const variable for Route here
const chakrasRoute = require('./routes/chakrasRoute');
const notesRoute = require('./routes/notesRoute');
const usersRoute = require('./routes/usersRoute');
const loginRoute = require('./routes/loginRoute');
const userAuth = require('./routes/userAuth');

require('dotenv').config();


const { PORT, JWT_KEY } = process.env;
// const JWT_KEY = process.env.JWT_KEY;


app.use(cors());
app.use(express.static('public'));
app.use('/static', express.static('public'));
app.use(express.json());


app.use('/chakras', chakrasRoute);
app.use('/notes', notesRoute);
app.use('/user', usersRoute);
app.use('/userAuth', userAuth);
// app.use('/login', loginRoute);


app.get('/', (req, res)=>{
    res.json({
        greeting: "Welcome to my API!"
    });
});

app.listen(PORT, console.log(`Server listening at: http://localhost:${PORT}`));



