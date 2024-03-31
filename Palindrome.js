function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  console.log(cleanedStr);
  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

// Example usage:
const testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString));
