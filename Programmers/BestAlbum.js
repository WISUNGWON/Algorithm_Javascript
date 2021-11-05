function solution(genres, plays) {
  const arrMap = new Map();
  const totalMap = new Map();
  genres.map((genre, id) => {
    const genreArr = arrMap.get(genre);
    arrMap.set(
      genre,
      genreArr
        ? [...genreArr, { id, play: plays[id] }].sort((a, b) => b.play - a.play)
        : [{ id, play: plays[id] }]
    );
    totalMap.set(genre, (totalMap.get(genre) || 0) + plays[id]);
  });

  const totalArr = [];
  for (let [genre, play] of totalMap) {
    totalArr.push({ genre, play });
  }
  totalArr.sort((a, b) => b.play - a.play);

  const answer = [];
  totalArr.forEach((total) => {
    const genreArr = arrMap.get(total.genre);
    if (genreArr[0]) answer.push(genreArr[0].id);
    if (genreArr[1]) answer.push(genreArr[1].id);
  });
  return answer;
}
