// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

let arr1 = [2,1,100,3]
let arr2 = [-5,-2,10,-3,7]
let d = 6


// let count = 0
// for(let i = 0; i<arr1.length; i++) {
//   let arr = []
//   for(let j = 0; j<arr2.length; j++) {
//     arr.push(Math.abs(arr1[i]-arr2[j]))
//     }
//     if(arr.every((e) => e > d)) count++
//   }
// console.log(count)


// ANOTHER WAY
// let count = 0
// for(let i = 0; i<arr1.length; i++) {
//   if(arr2.every((e) => Math.abs(arr1[i] - e) > d)) count++
// }
// console.log(count)


//ANOTHER WAY
let count = 0
arr1.forEach((n) => {
  if (arr2.every((e) => Math.abs(n-e) > d)) count++
})
console.log(count)