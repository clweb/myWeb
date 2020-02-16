const http = require('http');
const qs = require('querystring');
const app = http.createServer();

app.on('request', (req, res) => {
    let postData = '';
    req.on('data', (chunk) => {
        postData += chunk;
    });
    req.on('end', () => {
        console.log(postData); //username=admin&userpwd=123456
        let {
            username,
            userpwd
        } = qs.parse(postData);
        console.log(username, userpwd);
    });
});

app.listen(7788);