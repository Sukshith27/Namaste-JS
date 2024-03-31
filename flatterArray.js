// // flatter the array

const flatterArray = (arr) => {
  let flatter = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatter = flatter.concat(flatterArray(element));
    } else {
      flatter.push(element);
    }
  });
  return flatter;
};
const array = [[1, 2], [3, 4, [5, 6]], 7, [8]];
console.log(flatterArray(array));

// const flatterArray = (arr) => {
//   console.log(arr.length)
//   let flatter = []

//   for(let i=0; i< arr.length; i++){
//     if(Array.isArray(arr[i])){
//       flatter = flatter.concat(flatterArray(arr[i]))
//     }
//     else{
//       flatter.push(arr[i])
//     }
//   }
//   return flatter
// }

// const array = [[1, 2], [3, 4, [5, 6]], 7, [8]];
// console.log(flatterArray(array));
