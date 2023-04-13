// create an Array using an Array literal
const cats = ["Grey", "Calico", "Orange"];
// access the 1st item in the Array
console.log(cats[3]);
// access the last item in the Array
console.log(cats[cats.length -1]);
// print the length of the Array
console.log(cats.length);
// use the length property to access the last item in the Array
console.log(cats[cats.length -1]);
// with for...of, loop over the Array, modify the value and add to a different Array
const cat = ["Grey", "Calico", "Orange"];
for (let cat of cats) {
  console.log(cats);
}
