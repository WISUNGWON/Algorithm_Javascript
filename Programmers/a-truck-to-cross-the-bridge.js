// Level2: 다리를 지나는 트럭 (스택/큐)

function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let trucksInBridge = [{ w: truck_weights[0], t: bridge_length - 1 }];
  let maximumWeight = weight - truck_weights[0];
  truck_weights.shift();

  const getTrucksInBridge = (preTrucksInBridge) => {
    return preTrucksInBridge
      .reduce((acc, cur) => {
        if (cur.t > 0) {
          return [...acc, cur];
        }
        maximumWeight += cur.w;
        return acc;
      }, [])
      .map((truck) => ({
          ...truck,
          t: truck.t - 1,
      }));
  };

  const addTruckToBridge = (truckWeight) => {
    truck_weights.shift();
    trucksInBridge.push({ w: truckWeight, t: bridge_length - 1 });
    maximumWeight -= truckWeight;
  };

  const checkTruckCanCrossTheBridge = (truckWeight, lengthOfTrucksInBridge) => {
    return maximumWeight - truckWeight >= 0 && lengthOfTrucksInBridge < bridge_length
  } 

  while (trucksInBridge.length) {
    answer++;
    trucksInBridge = getTrucksInBridge(trucksInBridge);
    let curTruckWeight = truck_weights[0];
    if (checkTruckCanCrossTheBridge(curTruckWeight, trucksInBridge.length)) {
      addTruckToBridge(curTruckWeight);
    }
  }

  return answer;
}