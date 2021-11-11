let frequencySort = function (nums) {
    const map = new Map();
    nums.forEach((val) => {
        map.set(val, (map.get(val) || 0) + 1);
    });
    const arr = Array.from(map, ([num, cnt]) => ({ num, cnt }));
    const answer = arr
        .sort((a, b) => {
            if (a.cnt > b.cnt) return 1;
            if (a.cnt < b.cnt) return -1;
            if (a.num > b.num) return -1;
            if (a.num < b.num) return 1;
            return 0;
        })
        .map((val) => new Array(val.cnt).fill(val.num))
        .flat();

    return answer;
};