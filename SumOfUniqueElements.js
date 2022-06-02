let nums = [1,2,3,4,5]
let total = 0
for(let i = 0; i<nums.length; i++) {
  let count = 0
  for(let j = 0; j<nums.length; j++) {
    if(nums[i]===nums[j]) {
      count += 1
    }
    }
    if (count === 1) {
      total+=nums[i]
  }
}
console.log(total)

// const set = new Set(nums);

// const duplicates = nums.filter(item => {
//     if (set.has(item)) {
//       return item;
//     } else {
//       set.delete(item);
//     }
// });

// console.log(duplicates)