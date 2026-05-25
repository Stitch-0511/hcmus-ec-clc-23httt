const func = require('./lab03_module');

console.log(func.sum(100,20));
console.log(func.minus(100,20));
console.log(func.data[3]);

// Tìm hiểu thêm 2 khái niệm: promise in es6 (chỉ chạy được trên một core) --> chạy bất đồng bộ nên cần dùng để chờ