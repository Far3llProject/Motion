var button = document.getElementById("menu")
var show = false
button.onclick =  () => {
   
    if(!show){
        document.getElementById("menu_drop").style.display = "flex"
        document.getElementById("menu_drop").classList.add("menu__dropdown")
        document.getElementById("menu_drop").classList.remove("menu__out")
        show = !show
    }else {
        document.getElementById("menu_drop").classList.remove("menu__dropdown")
        document.getElementById("menu_drop").classList.add("menu__out")
        setTimeout(() => ( document.getElementById("menu_drop").style.display = "none"),500)
        show = !show
    }
} 