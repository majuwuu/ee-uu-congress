const readMoreButton = document.getElementById("readMore")
const secondSection = document.querySelector(".secondSection")

const toggleDropdown = () => {
    const isDisplay =  secondSection.style.display === "" || secondSection.style.display === "none"
     if(isDisplay){
       secondSection.style.display = "flex"
       readMoreButton.innerHTML = "READ LESS"
     }else {secondSection.style.display = "none", readMoreButton.innerHTML = "READ MORE"
   }
   }
   
readMoreButton.addEventListener("click", toggleDropdown)