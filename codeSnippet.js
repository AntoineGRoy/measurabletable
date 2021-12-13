/** Assumptions:
      - every object has an ID
      - we will query 2 arrays
      - there is more than one object in the array
      - object properties values are primitive, immutable (not objects);
      - objects are sorted by ascending ID order.
      - there can be gaps in IDs
      - All objects from a batch have different IDs.*/
/*We could just Merge the Arrays const merged =[...names, ...ages],
 use reduce and sort them but that's way slower than this solution: */

const names = [
  {
    id: "1",
    firstName: "Karen",
    lastName: "Page",
  },
  {
    id: "2",
    age: 87,
    firstName: "Coco",
    strange: "Yes",
  },
  {
    id: "3",
    firstName: "Jessica",
    lastName: "Jones",
  },
  {
    id: "5",
    firstName: "Frank",
    lastName: "Castle",
  },
  {
    id: "100",
    firstName: "Karen",
    lastName: "Page",
  },
  {
    id: "345",
    firstName: "Jean",
  },
];
const ages = [
  {
    id: "2",
    age: 87,
  },
  { id: "123", age: 105 },
  { id: "1003", age: 204 },
];

function merger(arr1, arr2) {
  //gathering properties names while iterating through the input to fill the table head;
  let numberOfObjects = arr1.length + arr2.length;
  let indexArr1 = 0;
  let indexArr2 = 0;
  //main output - merged objects to fill the rows
  let merged = [];
  console.log(numberOfObjects);
  //task is merging identical IDs into one object
  while (numberOfObjects > 0) {
    //exit condition
    if (!arr1[indexArr1] || !arr2[indexArr2]) {
      console.log("EMPTY");
      if (!arr2[indexArr2]) {
        addToMerged(arr1[indexArr1]);
        indexArr1++;
        numberOfObjects--;
      } else {
        merged.push(arr2[indexArr2]);
        indexArr2++;
        numberOfObjects--;
      }
    } else {
      //iterating
      let obj1Id = parseInt(arr1[indexArr1].id);
      let obj2Id = parseInt(arr2[indexArr2].id);

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

console.log(merger(ages, names));
let arr = [...names, ...ages];

//optional cleaner but way slower using reduce (50% slower)
function groupById(objectArray) {
  return objectArray.reduce(function (acc, obj, index) {
    let key = obj["id"];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
console.log(groupById(arr));
