const navigation = document.querySelector("nav");


function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

window.addEventListener('scroll', onScroll);