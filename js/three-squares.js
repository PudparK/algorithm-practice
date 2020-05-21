const parentDiv = document.getElementById("first");

function getDivSize(el) {
  return el.getBoundingClientRect();
}

function makeFourQuadrants(height, width) {
  // divide height
  // divide width
}

let parentDivSize = getDivSize(parentDiv);
console.log("parentDivSize:", parentDivSize);
