let nums = [1,2,3,4]
  let newArr = []

  for(let i = 0; i<nums.length; i+=2) {
    let times = nums[i]
    while(times > 0) {
    newArr.push(nums[i+1])
    times--
    }
  }
console.log(newArr)
