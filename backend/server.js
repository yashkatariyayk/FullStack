const express = require('express');
const bodyParser = require('body-parser');
const app = express();
mongoose = require('mongoose'),
config = require('./db');

const cors = require('cors');
mongoose.Promise = global.Promise;

    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );



app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());
app.use(bodyParser.json())
require('./app/router/route')(app);



app.get('/',(req, res) => {
   
    res.json({"message": "WelCome"});
});

app.post('/user', (req, res) => {
    
    res.json({"message": "WelCome"});
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});