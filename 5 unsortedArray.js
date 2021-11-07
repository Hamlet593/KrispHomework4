/*Given an unsorted array, ﬁnd a pair with the given sum in it. Input:

nums = [8, 7, 2, 5, 3, 1]
target = 10

Output:

Pair found (8, 2)
or
Pair found (7, 3)*/

function unsortedArray(nums, target){
  let result;
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        result = `(${nums[i]},${nums[j]})`
        console.log(`Pair found ${result}`)
      }
    }
  }
  return;
}
unsortedArray([8, 7, 2, 5, 3, 1], 10);