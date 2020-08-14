const express = require('express')
const path  = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/db');


// getting the routers
let indexRoutes = require('./routers/index.router');

// mongodb
mongoose.connect(config.db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
    } 
);
let mongoDb = mongoose.connection;

mongoDb.once('open', function(){
    console.log('DB connected')
})
mongoDb.on('error', function(err){
    console.log(err)
})

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));
// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use('/', indexRoutes);


app.listen(4000, () => console.log(`Sever started on port 4000`));