const express = require('express');
const app = express();

const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home', home);
app.use('/admin', admin);

app.listen(7788, () => {
    console.log('7788 is running');
});