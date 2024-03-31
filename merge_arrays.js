// const inp = [
//   { name: "firstname", value: "johndoe" },
//   { name: "age", value: "28" },
//   { name: "language", value: "English" },
//   { name: "language", value: "Tamil" },
//   { name: "language", value: "Hindi" },
// ];

// const output = inp.reduce((acc, { name, value }) => {
//   if (acc[name]) {
//     acc[name] = Array.isArray(acc[name])
//       ? [...acc[name], value]
//       : [acc[name], value];
//   } else {
//     acc[name] = value;
//   }
//   return acc;
// }, {});

// console.log(output);

const findMinPlatforms = (arr, dep) => {
  arr = arr.map(
    (time) => parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1])
  );
  dep = dep.map(
    (time) => parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1])
  );

  let platforms = 1;
  let maxPlatforms = 1;
  let i = 1;
  let j = 0;

  while (i < arr.length && j < dep.length) {
    if (arr[i] <= dep[j]) {
      platforms++;
      i++;
    } else {
      platforms--;
      j++;
    }
    maxPlatforms = Math.max(maxPlatforms, platforms);
  }

  return maxPlatforms;
};

// Test cases
const arr1 = ["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"];
const dep1 = ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"];
console.log(findMinPlatforms(arr1, dep1)); // Output: 3
