let nums = [8,1,2,2,3]

var smallerNumbersThanCurrent = function(nums) {
  let newArr = []
  for(let i = 0; i<nums.length; i++) {
    let count = 0
    for(let j = 0; j<nums.length; j++) {
      if(nums[i] > nums[j]) count += 1
      }
      newArr.push(count)
    }
    console.log(newArr)
  }

  smallerNumbersThanCurrent(nums)