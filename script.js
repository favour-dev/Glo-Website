const hamburgerIcon = document.getElementById("icon")
const menuItems = document.getElementById("menu-items")

hamburgerIcon.addEventListener('click',()=> {
    menuItems.classList.toggle("show-nav-dropdown")
})