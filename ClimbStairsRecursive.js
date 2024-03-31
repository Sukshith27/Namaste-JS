function climbStairsRecursive(n) {
  // Base cases
  if (n === 0 || n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  // Recursive relation
  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

// Example usage:
//   console.log(climbStairsRecursive(2)); // Output: 2
console.log(climbStairsRecursive(5));
