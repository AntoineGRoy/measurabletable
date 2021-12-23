import { RowObject } from "../App";

export function tableDataMerger(arr1: any, arr2: any) {
  let merged = [...arr1, ...arr2];
  let IDs = new Map();

  merged.forEach((obj) => {
    if (IDs.has(obj.id)) {
      IDs.set(obj.id, { ...obj, ...IDs.get(obj.id) });
    } else {
      IDs.set(obj.id, { ...obj });
    }
  });
  let results = Array.from(IDs.values());
  results.sort(function (a, b) {
    return a.id - b.id;
  });

  return results;
}
