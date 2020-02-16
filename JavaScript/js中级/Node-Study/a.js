const str = 'cl';
module.exports = str;
// exports.a = str; //{a:str}
// module.exports.a = str;

// module.exports 与 exports
// exports 是module.exports的别名 因为require() 返回的是module.exports
// 所以对 exports 重新赋值 我们拿不到该值 但是了以exports.***=***;
// 一般导出一个成员 直接module.exports=成员
// 多个成员 exports.成员1=值1 exports.成员2=值2