const navbar = document.getElementById("inicio");
const header = document.getElementById("header");
const navi = document.getElementById("navi");

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
