function rand(min, max) {
    // Math.round(Math.random()*5+5) [5,10]
    return Math.round(Math.random() * (max - min) + min);
}

function rand2(min, max) {
    // Math.floor(Math.random()*6+5)
    return Math.floor(Math.random() * (max - min + 1) + min);
}