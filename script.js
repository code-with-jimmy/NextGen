// toggle function

let toggle_nav = document.querySelector(".toggle-nav");
let nav = document.querySelector("nav");
let get_start = document.querySelector(".get-start");


toggle_nav.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("on");
  get_start.classList.toggle("get")
})

document.addEventListener("click", () => {
  nav.classList.remove("on");
})


























