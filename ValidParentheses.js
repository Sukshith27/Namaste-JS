const isValidParentheses = (s) => {
  const stack = [];
  const parenthesesMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char in parenthesesMap) {
      const topElement = stack.pop() || "#";
      if (parenthesesMap[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

const parenthesesString = "{[]}";
console.log(isValidParentheses(parenthesesString));
