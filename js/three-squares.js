function sayClass(e) {
  console.log(e);
}

let el = document.getElementById("first");
alert(el);

el.addEventListener("click", sayClass);
