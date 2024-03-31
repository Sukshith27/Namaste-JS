// const findSecondLargest = (arr) => {
//   if (arr.length < 2) {
//     return "Array must have at least two elements";
//   }
//   let largest = -Infinity
//   let secondLargest = -Infinity

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// };

// const array = [3, 4, 1, 2, 4];
// console.log(findSecondLargest(array));

// const findSecondLargest = (arr) => {
//   arr.sort((a, b) => b - a);
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== largest) return arr[i];
//   }
// };

// const arr = [54, 54, 54, 43, 24];
// console.log(findSecondLargest(arr));

const findSecondLargest = (arr) => {
  if (arr.length < 2) {
    console.log("array must have at least have two numbers");
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const array = [3, 5, 1, 2, 4, 5];
console.log(findSecondLargest(array));
