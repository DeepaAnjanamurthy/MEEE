const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');

// create const variable for Route here
const chakrasRoute = require('./routes/chakrasRoute');
// const notesRoute = require('./routes/notesRoute');
const usersRoute = require('./routes/usersRoute');

require('dotenv').config();

const { PORT, JWT_KEY} = process.env;
// const JWT_KEY = process.env.JWT_KEY;


function loadUsers(){
    return fs.readFileSync("./data/users.json", "utf8");
}

// app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/chakras', chakrasRoute);
// app.use('/notes', notesRoute);
app.use('/users', usersRoute);

app.get('/', (req, res)=>{
    res.json({
        greeting: "Welcome to my API!"
    });
});

app.route('/login')
    .post((req, res)=>{
    const payload ={
        // userid: req.body.id,
        username:req.body.username,
        // password: req.body.password
    }
    const token = jwt.sign(payload, JWT_KEY, {expiresIn: '1hr'});
    res.json({token});
})


app.route('/user')
    .get((req, res) =>{
        console.log(req.headers);
        const tokenData = req.headers.authorization ? req.headers.authorization : '';
        
        const token = tokenData.split(' ')[1];
        jwt.verify(token, JWT_KEY, (err, decodedData) =>{
            if(err){
                res.status(403).json({error: 'Token not authorized or it has expired'});
            } else {
                // find the user in json and return as response
                // res.json()
            }
        })
    })
    .post((req, res) => {
        console.log(req.body);
        // add user info into users.json
        res.send('request to add user recieved')
    })



app.listen(PORT, console.log(`Server listening at: http://localhost:${PORT}`));
