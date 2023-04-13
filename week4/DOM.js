const list = document.getElementById("class-schedule-list");
console.log(list);

const ordered = list.children
console.log(ordered);

const classList = document.getElementsByClassName("class-week");

document.getElementsByTagName('h2')[0].textContent = "Hello World";

// this method returns the first paragraph element
document.querySelector("h2");

// this method returns the one element with the id "my-ID"
document.querySelector("#class-schedule-list");

// this method returns an array of all elements with the class "my-class"
const htmlClassWeekElement = document.querySelectorAll("#html.class-week");
console.log(htmlClassWeekElement);

const ol = document.querySelector("#class-schedule-list ol");
console.log("ol", ol);
console.log(ol.firstElementChild);
console.log(ol.lastElementChild);

const pic = document.getElementById("dog-picture");
console.log("h2", pic.nextElementSibling)

const header = document.getElementsByTagName("header")[0];
console.log("outer", header.outerHTML);
console.log("inner", header.innerHTML);
const inner = header.innerHTML;

header.outerHTML = '<header><h2>SavvyCoders</h2></headers>'

const header2 = document.getElementsByTagName("header")[0];

header2.innerHTML = '<h2>Javascript Rocks</h2>';





document.querySelector("#dog-picture").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

document.querySelection('nav.nav-bar').style.cssText = 'background-color: red';
document.querySelection('nav.nav-bar').style.color = "black"


document.querySelector('#do something').addEventListener(
  "click",
  (event) => {
    const p = document.createElement('p');
    p.innerText = "Savvy Coders";

  }
)
