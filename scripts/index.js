const body = document.body
const sideBar = document.getElementById("sideBarContainer")
const exitContainer = document.getElementById("exitContainer")
const burguerMenu = document.getElementById("burgerMenuContainer")
const article = document.getElementById("dropdownArt")
const secondSection = document.querySelector(".secondSection")

const openMenu = () => {
  body.style.overflowY = "hidden"
  sideBar.style.left = "0%"
}

const closeMenu = ()=> {
  sideBar.style.left = "-100%"
  body.style.overflowY = "auto"
}

exitContainer.addEventListener("click", closeMenu)
burguerMenu.addEventListener("click", openMenu)