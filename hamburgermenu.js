const menu = document/querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector("closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains ("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.computedStyleMap.display = "none";
        menuIcon.computedStyleMap.display = "block";  
    }   else {
        menu.classList.add("showMenu");
        closeIcon.computedStyleMap.display = "block";
        menuIcon.computedStyleMap.display = "none"; 
    }
}
hamburger.addEventListener("click",toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)