// Level2: 다리를 지나는 트럭 (스택/큐)

function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let bridge = [{ w: truck_weights[0], t: bridge_length - 1 }];
  let curWeight = weight - truck_weights[0];
  const newTruckWeights = truck_weights;
  newTruckWeights.shift();

  const filterTrucksInTheBridge = (preBridge) => {
    return preBridge
      .filter((truck) => {
        if (truck.t > 0) {
          return true;
        }

        curWeight += truck.w;
        return false;
      })
      .map((truck) => {
        return {
          ...truck,
          t: truck.t - 1,
        };
      });
  };

  const addTruckInTheBridge = (truckWeight) => {
    newTruckWeights.shift();
    bridge.push({ w: truckWeight, t: bridge_length - 1 });
    curWeight -= truckWeight;
  };

  while (bridge.length) {
    answer++;
    bridge = filterTrucksInTheBridge(bridge);

    let curTruckWeight = newTruckWeights[0];
    if (curWeight - curTruckWeight >= 0 && bridge.length < bridge_length) {
      addTruckInTheBridge(curTruckWeight);
    }
  }

  return answer;
}
