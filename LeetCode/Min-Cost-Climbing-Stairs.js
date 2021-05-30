let minCostClimbingStairs = function (cost) {
  dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp = [dp[1], cost[i] + Math.min(dp[0], dp[1])];
  }

  return Math.min(dp[0], dp[1]);
};
