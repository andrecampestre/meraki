function toggle_menu() {
  const header = document.querySelector(".header");
  const button = document.querySelector(".header__button");
  const menu = document.querySelector(".menu");

  header.classList.toggle("menu--open");
  button.classList.toggle("menu--open");
  menu.classList.toggle("menu--open");
}
