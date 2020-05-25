// Khai báo thư viện ngoài
const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');




// Khai báo module exports
const userRouters = require('.//routers/users.router');
const db = require('./db.connect');




// khai báo instan module exports:
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Khai kháo view engine:
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));
// Khai báo biến:
const port = 3002;

app.use('/users',userRouters);

app.listen(port,()=>{console.log('Server startes with: ' + port + ' port.')});


