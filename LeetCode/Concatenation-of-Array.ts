function getConcatenation(nums: number[]): number[] {
    const ans = [];
    nums.forEach((val) => ans.push(val));
    nums.forEach((val) => ans.push(val));
    return ans
};

function getConcatenation2(nums: number[]): number[] {
    const n = nums.length;
    const ans = new Array(n * 2).fill(0);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = nums[i % n];
    }
    return ans
};

g