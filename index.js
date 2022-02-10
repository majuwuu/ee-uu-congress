let sideBar = document.getElementById("sideBarContainer")
const burguerMenu = document.getElementById("burgerMenuContainer")
const openMenu = () => {
  sideBar.styles.display = "inline"   
}
burguerMenu.addEventListener("click", openMenu)
 
const exitContainer = document.getElementById("exitContainer")
const closeMenu = ()=> {
     sideBar.style.display = "none"
}
exitContainer.addEventListener("click", closeMenu)
// const toggleMenu = ()=> {
//     const style = getComputedStyle(sideBar)
//     console.log(style.display)
//     if (style.display === "none")
    
//   }
//   toggleMenu()