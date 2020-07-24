const navbar = document.getElementById("inicio");
const header = document.getElementById("header");
const navi = document.getElementById("navi");
const modal_open = document.querySelectorAll(".modal-open");
const modal_close = document.querySelectorAll(".modal-close");
const modal = document.getElementById("modal");

if (window.scrollY > 200) {
  header.classList.add("flex");
  header.classList.remove("hidden");
  header.classList.add("indexer");
}

modal_open.forEach((el) => {
  console.log(el);
  el.addEventListener("click", () => {
    modal.classList.remove("hide-modal");
    modal.classList.add("show-modal");
    console.log("aea");
  });
});

modal_close.forEach((el) => {
  el.addEventListener("click", () => {
    modal.classList.add("hide-modal");
    modal.classList.remove("show-modal");
  });
});

window.addEventListener("scroll", (event) => {
  const scrolled = this.scrollY;
  if (scrolled > 200) {
    header.classList.add("flex");
    header.classList.remove("hidden");
    header.classList.add("indexer");
  } else {
    header.classList.remove("flex");
    header.classList.remove("indexer");
    header.classList.add("hidden");
  }
});

// xl:max-w-none

// bg-white
