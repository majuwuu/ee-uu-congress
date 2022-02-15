const sideBar = document.getElementById("sideBarContainer")
const exitContainer = document.getElementById("exitContainer")
const burguerMenu = document.getElementById("burgerMenuContainer")
const body = document.body
const readMoreButton = document.getElementById("readMore")
const article = document.getElementById("dropdownArt")
const secondSection = document.querySelector(".secondSection")

const openMenu = () => {
  body.style.overflowY = "hidden"
  sideBar.style.left = "0%"
}

burguerMenu.addEventListener("click", openMenu)
 
const closeMenu = ()=> {
  sideBar.style.left = "-100%"
  body.style.overflowY = "auto"
}

exitContainer.addEventListener("click", closeMenu)

const toggleDropdown = () => {
 const isDisplay =  secondSection.style.display === "" || secondSection.style.display === "none"
  if(isDisplay){
    secondSection.style.display = "flex"
    readMoreButton.innerHTML = "READ LESS"
  }else {secondSection.style.display = "none", readMoreButton.innerHTML = "READ MORE"
}
}

readMoreButton.addEventListener("click", toggleDropdown)


