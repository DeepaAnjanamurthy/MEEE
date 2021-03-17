const express = require('express');
// const morgan = require('morgan');
const cors = require('cors');
const app = express();

// create const variable for videoRoute here
// const chakrasRoute = require('./routes/videosRoute');
// this was not required
require('dotenv').config();

const PORT = process.env.PORT;

// app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// app.use('/videos', videosRoute);
// app.use('/videodetails', videoDetails);

app.get('/', (req, res)=>{
    res.json({
        greeting: "Welcome to my API!"
    });
});


app.listen(PORT, console.log(`Server listening at: http://localhost:${PORT}`));
