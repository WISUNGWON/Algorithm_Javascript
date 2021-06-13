function solution(record) {
  let answer = [];
  let ids = {};
  let action = [];
  for (let i = 0; i < record.length; i++) {
    const [order, uid, nickName] = record[i].split(' ');
    switch (order) {
      case 'Enter':
        action.push([uid, '님이 들어왔습니다.']);
        if (ids[uid] !== 'nickName') {
          ids[uid] = nickName;
        }
        break;
      case 'Leave':
        action.push([uid, '님이 나갔습니다.']);
        break;
      case 'Change':
        ids[uid] = nickName;
        break;
    }
  }

  for (let i = 0; i < action.length; i++) {
    answer.push(ids[action[i][0]] + action[i][1]);
  }
  return answer;
}
