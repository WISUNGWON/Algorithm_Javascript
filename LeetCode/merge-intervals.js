var merge = function (intervals) {
    const p = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            // find overlap
            let j = i + 1;
            let end = arr[i][1]
            while (j < arr.length) {
                let curInterval = arr[j - 1];
                let curEnd = curInterval[1];
                const nextInterval = arr[j];
                const nextStart = nextInterval[0];
                if (curEnd < nextStart) {
                    break;
                }
                if (nextInterval[1] > end) {
                    end = nextInterval[1];
                }
                j++;
            }
            if (j > i + 1) {
                j--;
                const overlapedNum = [arr[i][0], end];
                const newArr = [...arr.slice(0, i), overlapedNum, ...arr.slice(j + 1, arr.length)]
                return p(newArr);
            }
        }

        return arr;
    }
    const newIntervals = [...intervals];
    newIntervals.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0
    })
    return p(newIntervals)
};