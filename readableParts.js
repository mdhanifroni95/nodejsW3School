const url = require('url');
const add = 'http://localhost:8080/default.html?year=2017&month=february';
const q = url.parse(add, true);
console.log(q.host);
console.log(q.protocol);
console.log(q.pathname);
console.log(q.search);
const qData = q.query;
console.log(qData.month);