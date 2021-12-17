function buildArray(nums: number[]): number[] {
    return nums.map(val => nums[val])
};

function buildArray2(nums: number[]): number[] {
    const ans = [];
    nums.forEach((val) => ans.push(nums[val]));
    return ans;
};