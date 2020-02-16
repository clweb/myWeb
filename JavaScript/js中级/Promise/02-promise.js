let fs = require("fs");

/* 
function read() {
    fs.readFile('./a.txt', 'utf-8', function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        fs.readFile('./b.txt', 'utf-8', function (err, data) {
            if (err) return console.log(err);
            console.log(data);
        });

    });
}
read(); */
function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
//Promise解决回调
read("./a.txt").then(data => {
  console.log(data);
  return read("./b.txt");
}).then(data => {
  console.log(data);
});