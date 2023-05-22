const path = require('path');

const PathModule = () => {
const fileName = "/NodeBasic/httpModule.js";

console.log(path.basename(fileName));   //httpModule.js
console.log(path.dirname(fileName));    //NodeBasic
console.log(path.extname(fileName));    //.js
}

module.exports = {PathModule}

// The path module is especially useful when working on different operating systems that use different path separators, 
// such as forward slashes on Unix-based systems and backslashes on Windows systems. By using the path module, 
// you can write code that is compatible across multiple platforms.