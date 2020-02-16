let p1 = new Promise((resolve, reject) => {

});

p1.then((result) => {
    console.log(1);
}, (reason) => {
    console.log('2');
});
console.log('3');