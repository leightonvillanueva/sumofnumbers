const testSet = [1, 2, 3, 4];

function forNums(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(forNums(testSet));

function whileNums(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(whileNums(testSet));

function recursionNums(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + recursionNums(nums.slice(1, nums.length));
}

console.log(recursionNums(testSet));

function sumUnderscore(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumUnderscore(testSet));