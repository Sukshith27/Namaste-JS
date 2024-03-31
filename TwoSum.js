const twoSum = (nums, target) => {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // console.log(numMap.has(complement), complement)
    if (numMap.has(complement)) {
      // console.log(numMap.get(complement))
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
    // console.log(numMap);
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); //9
