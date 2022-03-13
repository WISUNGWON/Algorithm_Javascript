function solutionOf오픈채팅방(record: string[]) {
  const words = [];
  const uidToNicknameObj = {};
  record.forEach((info) => {
    const infoArr = info.split(' ');
    const order = infoArr[0];
    const uid = infoArr[1];
    const nickname = infoArr[2];
    if (order === 'Enter') {
      if (!uidToNicknameObj[uid] || uidToNicknameObj[uid] !== nickname) {
        uidToNicknameObj[uid] = nickname;
      }
      words.push({ uid, word: '님이 들어왔습니다.' });
    }
    if (order === 'Leave') {
      words.push({ uid, word: '님이 나갔습니다.' });
    }
    if (order === 'Change') {
      uidToNicknameObj[uid] = nickname;
    }
  });

  return words.map((value) => uidToNicknameObj[value.uid] + value.word);
}
describe('solution of 오픈채팅방', () => {
  test('case1', () => {
    expect(
      solutionOf오픈채팅방([
        'Enter uid1234 Muzi',
        'Enter uid4567 Prodo',
        'Leave uid1234',
        'Enter uid1234 Prodo',
        'Change uid4567 Ryan',
      ])
    ).toEqual([
      'Prodo님이 들어왔습니다.',
      'Ryan님이 들어왔습니다.',
      'Prodo님이 나갔습니다.',
      'Prodo님이 들어왔습니다.',
    ]);
  });
});
