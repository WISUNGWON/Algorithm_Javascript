function solution(str1, str2) {
  let answer = 0;
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();
  let map1 = new Map();
  let map2 = new Map();
  // for str1
  for (let i = 0; i < newStr1.length - 1; i++) {
    let acStr = newStr1.charCodeAt(i);
    let acStrr = newStr1.charCodeAt(i + 1);
    if (acStr >= 97 && acStr <= 122 && acStrr >= 97 && acStrr <= 122) {
      let now1 = newStr1[i] + newStr1[i + 1];
      let value = map1.get(now1);
      value ? map1.set(now1, value + 1) : map1.set(now1, 1);
    }
  }

  for (let i = 0; i < newStr2.length - 1; i++) {
    let acStr2 = newStr2.charCodeAt(i);
    let acStrr2 = newStr2.charCodeAt(i + 1);
    if (acStr2 >= 97 && acStr2 <= 122 && acStrr2 >= 97 && acStrr2 <= 122) {
      let now2 = newStr2[i] + newStr2[i + 1];
      let value = map2.get(now2);
      value ? map2.set(now2, value + 1) : map2.set(now2, 1);
    }
  }

  let size1 = map1.size;
  let size2 = map2.size;
  if (size1 === 0 && size2 === 0) {
    return 65536;
  } else {
    let newMap;
    let otherMap;
    if (size1 > size2) {
      newMap = map1;
      otherMap = map2;
    } else {
      newMap = map2;
      otherMap = map1;
    }

    let kyo = 0;
    for (let key of newMap.keys()) {
      let newValue = newMap.get(key);
      let otherValue = otherMap.get(key);
      if (otherValue !== undefined) {
        kyo += otherValue > newValue ? newValue : otherValue;
      }
    }

    let hap = 0;
    for (let key of newMap.keys()) {
      let newValue = newMap.get(key);
      let otherValue = otherMap.get(key);
      if (otherValue > 0) {
        hap += otherValue > newValue ? otherValue : newValue;
        newMap.set(key, -1);
      } else if (otherValue === undefined) {
        hap += newValue;
      }
    }

    for (let key of otherMap.keys()) {
      let newValue = otherMap.get(key);
      let otherValue = newMap.get(key);
      if (otherValue > 0) {
        hap += otherValue > newValue ? otherValue : newValue;
      } else if (otherValue === undefined) {
        hap += newValue;
      }
    }

    answer = Math.floor((kyo / hap) * 65536);
  }

  return answer;
}
