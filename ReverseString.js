const reverseString = (str) => {
  return str.split("").reverse().join("");
  //   console.log(reverse);
};

const inputString = "Hello world";
console.log(reverseString(inputString));

// with out using any js methods

const reverseStringWithoutJSMethods = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
    console.log(newStr);
  }
  return newStr;
};

const inputString1 = "Hello world";
console.log(reverseStringWithoutJSMethods(inputString));
