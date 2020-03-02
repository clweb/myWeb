let student = [{
    name: 'zs',
    sex: '男'
}];

let str = '<ul>';
for (let i = 0; i < student.length; i++) {
    str += `<li>` + student[i].name + `</li>` +
        `<li>` + student[i].sex + `</li>`;
}
str += '</ul>';
console.log(str);