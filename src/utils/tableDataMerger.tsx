import { RowObject } from "../App";
export function tableDataMerger(
  arr1: Array<RowObject>,
  arr2: Array<RowObject>
) {
  //gathering properties names while iterating through the input to fill the table head;
  let numberOfObjects: number = arr1.length + arr2.length;
  let indexArr1: number = 0;
  let indexArr2: number = 0;
  //main output - merged objects to fill the rows
  let merged: Array<RowObject> = [];
  //task is merging identical IDs into one object
  while (numberOfObjects > 0) {
    //exit condition
    if (!arr1[indexArr1] || !arr2[indexArr2]) {
      console.log("EMPTY");
      if (!arr2[indexArr2]) {
        merged.push(arr1[indexArr1]);
        indexArr1++;
        numberOfObjects--;
      } else {
        merged.push(arr2[indexArr2]);
        indexArr2++;
        numberOfObjects--;
      }
    } else {
      //iterating
      let obj1Id: number = parseInt(arr1[indexArr1].id!);
      let obj2Id: number = parseInt(arr2[indexArr2].id!);

      if (obj1Id === obj2Id) {
        //merging objects with identical ID
        merged.push({ ...arr1[indexArr1], ...arr2[indexArr2] });
        indexArr2++;
        indexArr1++;
        numberOfObjects = numberOfObjects - 2;
      } else {
        if (obj1Id < obj2Id) {
          merged.push(arr1[indexArr1]);
          indexArr1++;
          numberOfObjects--;
        } else {
          //obj2Id>obj1Id
          merged.push(arr2[indexArr2]);
          indexArr2++;
          numberOfObjects--;
        }
      }
    }
  }
  return merged;
}
