const navHelper = () => {

  const navBurger = document.querySelector(".navbar-burger");
  const navMenu = document.querySelector(".navbar-menu")

  navBurger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }
}

export default navHelper;

