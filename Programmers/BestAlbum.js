function solutionOf베스트앨범(genres, plays) {
  const genreMap = new Map();
  genres.forEach((genre, index) => {
    const value = genreMap.get(genre);
    const play = plays[index];
    genreMap.set(genre, value ? [...value, { index, play }] : [{ index, play }]);
  });

  return Array.from(genreMap.keys())
    .map((genre) => ({
      genre,
      playSum: genreMap.get(genre).reduce((prev, curr) => {
        return prev + curr.play;
      }, 0),
    }))
    .sort((a, b) => b.playSum - a.playSum)
    .map(({ genre }) => {
      const value = genreMap.get(genre);
      return value
        .sort((a, b) => {
          if (a.play - b.play > 0) {
            return -1;
          }

          return a.index - b.index;
        })
        .filter((_, index) => index < 2)
        .map((val) => val.index);
    })
    .flat();
}
