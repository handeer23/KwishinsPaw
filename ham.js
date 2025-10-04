const hamburgerMenu= document.querySelector(".hamburger-menu")

const offScreenMenu= document.querySelector(".offScreenMenu")

hamburgerMenu.addEventListener("click", ()=>{
    hamburgerMenu.ClassList.toggle("active")
    offScreenMenu.classList.toggle("active")
})