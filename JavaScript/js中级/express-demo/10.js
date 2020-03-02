const express = require('express');
const app = express();

// /user/:id
app.get('/user/:id', (req, res) => {
    res.send(req.params);
});
app.listen(7788, () => {
    console.log('7788 is running');
});