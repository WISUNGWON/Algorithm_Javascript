// 프로그래머스 - 땅따먹기 (Lavel - 2)

function solutionOfHopscotch(land: number[][]) {
  const dp = land[0];
  for (let i = 1; i < land.length; i++) {
    const cur = land[i];
    const prevDp = [...dp];
    for (let j = 0; j < 4; j++) {
      dp[j] = cur[j] + Math.max(...prevDp.filter((_, index) => index !== j));
    }
  }
  return Math.max(...dp);
}
