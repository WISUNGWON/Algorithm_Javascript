var trap = function (height) {
  const len = height.length;
  let [maxLeft, maxRight] = [height[0], height[len - 1]];
  let [pointerLeft, pointerRight] = [1, len - 2];
  let answer = 0;

  // HINT : 한쪽 벽이 반대쪽 벽보다 크다는 것은 큰쪽만큼 최대 물을 채울 수 있다는것.
  while (pointerLeft <= pointerRight) {
    if (maxLeft <= maxRight) {
      const trapWaterAmount = maxLeft - height[pointerLeft];
      if (trapWaterAmount > 0) {
        answer += trapWaterAmount;
      }
      maxLeft = Math.max(height[i], maxLeft);
      pointerLeft++;
    } else {
      const trapWaterAmount = maxLeft - height[pointerLeft];
      if (trapWaterAmount > 0) {
        answer += trapWaterAmount;
      }
      maxRight = Math.max(height[pointerRight], maxRight);
      pointerRight--;
    }
  }
  return answer;
};
