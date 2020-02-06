// let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

// let a1_res = a1.map(function (index, item) {
//     return index * 2;
// })

// console.log(a1_res);

// let a2= [2,3,4,5,10,11,12];

// let a2_res = a2.map(function (index, item) {
//     return Math.pow(index, 3);
// })

// console.log(a2_res);

// let a3 = [4,"3",6,7,"12",34,"56",78,90,11];

// let ar3_res = a3.map( index => Number(index) * 5);



// let ar4 = a3.filter( function (item, index) {
//     return  typeof(index) === string
// })

// console.log(ar4);

// ***======== split, join, forEach =======***
let a1 = [4,5,6,7,12,34,56,78,90,11];

let ar1 = [];

a1.forEach(function (elem, index) {
    ar1.push(elem * 2);
})

console.log(ar1);

let a3 = [2, "hello", 3, "hi", 4, "Mazai"];

let ar3 = [];

a3.forEach(function (elem, index) {
    if (typeof elem == 'string') {
        ar3.push(elem);
    }
      
})

console.log(ar3)

