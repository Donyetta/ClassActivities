const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];
const firstA = arr.indexOf('a');

// find the first index of "a", "b", and "c"

// find the last index of "a", "b", and "c"

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicate(array, duplicateValue) {
  let firstIndex = array.indexOf(duplicateValue);
  let lastIndex = array.lastIndexOf(duplicateValue);
  while (firstIndex !==lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicateValue);

  }
}
