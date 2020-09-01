export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const numArray = [];

  if (start <= end) {
    for (let i = start; i < end; i += 1) {
      numArray.push(i);
    }
    return numArray;
  }
  for (let i = start; i > end; i -= 1) {
    numArray.push(i);
  }
  return numArray;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let numSum = 0;
  if (numbers.length === 0) {
    return numSum;
  }
  for (let i = 0; i < numbers.length; i += 1) {
    numSum += numbers[i];
  }
  return numSum;
}
