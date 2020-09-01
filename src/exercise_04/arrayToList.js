export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  const myList = [];
  for (let i = (array.length - 1); i >= 0; i -= 1) {
    const list = {};
    if (i === (array.length - 1)) {
      list.value = array[i];
      list.next = null;
    } else {
      list.value = array[i];
      list.next = myList[i + 1];
    }
    myList[i] = list;
  }
  return { value: myList[0].value, next: myList[0].next };
}
