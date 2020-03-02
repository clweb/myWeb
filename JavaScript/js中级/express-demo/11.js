const express = require('express');
const app = express();

// express.statuc 可以托管静态文件
app.use('/static', express.static('public'));

app.listen(7788, () => {
    console.log('7788 is running');
});