/* Javascript for INsure Landing Page */


// Toggle the menu button
const btnMenu = document.getElementById("btn-menu");
const menu    = document.getElementById("menu");

btnMenu.addEventListener("click", function(){
  const body = document.getElementsByTagName("body")[0];
  const ariaExpanded = (btnMenu.getAttribute("aria-expanded") == "true") ? true : false;
  const menuLinks = document.getElementsByClassName("link-menu");
  
  if (ariaExpanded) {
    btnMenu.setAttribute("aria-expanded", "false");
    for (const link of menuLinks) link.setAttribute("tabindex", "-1");
  } else {
    btnMenu.setAttribute("aria-expanded", "true");
    for (const link of menuLinks) link.removeAttribute("tabindex");
  }

  body.classList.toggle("overflow-hidden");
  btnMenu.classList.toggle("btn-menu--active");
  menu.classList.toggle("menu--active");
});


// Update appropriate aria-hidden value on menu
const debounce = (func, delay) => {
  let debouncing;
  return function() {
    clearTimeout(debouncing);
    debouncing = setTimeout(() => func(), delay);
  }
}

const menuSetAria = () => {
  const width = window.innerWidth;
  const ariaHidden = menu.getAttribute("aria-hidden");
  if (ariaHidden == "false" && width < 1024) {
    menu.setAttribute("aria-hidden", "true");
  } else if (ariaHidden == "true" && width >= 1024) {
    menu.setAttribute("aria-hidden","false");
  }
};

window.addEventListener('resize', debounce(menuSetAria, 100));
menuSetAria();