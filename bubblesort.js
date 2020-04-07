
const funcsObject = {}



let i = 0;
let counter = 0;

funcsObject.counterIncreaser = function() {
  counter++; // increment the counter
};

funcsObject.bubbleSort = function(array) {
  /* your code here */
  let isSorted = false;



  while (!isSorted) {
    let elemIndex = i % array.length;
    let elem = array[elemIndex];
    let nextElemIndex = (i + 1) % array.length;
    let nextElem = array[nextElemIndex];

    if (elem > nextElem && elemIndex < nextElemIndex) {
      array[elemIndex] = nextElem;
      array[nextElemIndex] = elem;
      this.counterIncreaser();
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
