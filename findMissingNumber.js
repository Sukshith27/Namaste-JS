const findMissingNumbers = (arr) => {
  arr.sort((a, b) => a - b);
  let missingArr = [];
  let expected = arr[0];
  // let expected = 1;

  for (let num of arr) {
    while (num > expected) {
      missingArr.push(expected);
      expected++;
    }
    expected++;
  }

  // Check for missing numbers after the last element
  while (expected <= arr.length + 1) {
    missingArr.push(expected);
    expected++;
  }

  return missingArr;
};

const arr = [3, 7, 2, 5];
console.log(findMissingNumbers(arr));

// const findMissingNumbers = (arr) => {
//   arr.sort((a, b) => a - b);
//   let count = arr[0];
//   let missingArr = [];

//   for (let i = 0, j = 0; i < arr[arr.length - 1]; i++) {
//     if(arr[j] == count){
//         j++
//         count++
//     }
//     else{
//         missingArr.push(count)
//         count++
//     }
//   }
//   return missingArr;
// };

// const arr = [1, 5, 8];
// console.log(findMissingNumbers(arr));
