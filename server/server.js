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
const helloRoute = require('./routes/helloRoute');
const userAuth = require('./routes/userAuth');

require('dotenv').config();


const { PORT, JWT_KEY } = process.env;
// const JWT_KEY = process.env.JWT_KEY;


// app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());


app.use('/chakras', chakrasRoute);
app.use('/notes', notesRoute);
app.use('/user', usersRoute);
app.use('hello', helloRoute);
app.use('./userAuth', userAuth);
// app.use('./login', loginRoute);


app.get('/', (req, res)=>{
    res.json({
        greeting: "Welcome to my API!"
    });
});

// const user = {name: "test", password: "test" }
// app.route('/login')
//     .post((req, res)=>{
//         // Find user in users json file, if same as req data, send payload
//         if(user.name === req.body.username && user.password === req.body.password){
//             const payload ={
//                 // username:req.body.username,
//                 username: user.name
//                 //  can use user avatar here, likes 
//             }
//             const token = jwt.sign(payload, JWT_KEY, {expiresIn: '1hr'});
//             res.json({token});
//         } else{
//             res.json({message: "username and password not found "})
//         }
// })


// app.route('/user')
//     .get((req, res) =>{
//         console.log(req.headers);
//         const tokenData = req.headers.authorization ? req.headers.authorization : '';
        
//         const token = tokenData.split(' ')[1];
//         jwt.verify(token, JWT_KEY, (err, decodedData) =>{
//             if(err){
//                 res.status(403).json({error: 'Token not authorized or it has expired'});
//             } else {
//                 res.json(decodedData);
//             }
//         })
//     })
//     .post((req, res) => {
//         console.log(req.body);
//         // add user info to users.json
//         res.send('request to add user recieved');
//     })



app.listen(PORT, console.log(`Server listening at: http://localhost:${PORT}`));
