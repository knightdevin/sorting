function bubbleSort(array) {
  /* your code here */
  let isSorted = false;
  let i = 0;
  let counter = 0;

  const counterIncreaser = () => {
    counter++; // increment the counter
  };

  while (!isSorted) {
    let elemIndex = i % array.length;
    let elem = array[elemIndex];
    let nextElemIndex = (i + 1) % array.length;
    let nextElem = array[nextElemIndex];

    if (elem > nextElem && elemIndex < nextElemIndex) {
      array[elemIndex] = nextElem;
      array[nextElemIndex] = elem;
      counterIncreaser();
    }

    if (i % array.length === 0 && i > 0) {
      if (counter === 0) {
        isSorted = true;
      } else {
        counter = 0;
      }
    }
    i++; // increment the index by one
  }
  return array;
}
