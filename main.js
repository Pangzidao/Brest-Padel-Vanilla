console.log("hello")

const colors = {
    "white": "#fff",
    "green": "#b9dbb4",
    "lightblue": "#8dc5d5",
    "blue": "#0667a9",
    "darkblue": "#246c93"
}

const header = document.getElementById("header")
const headerLinks = document.querySelectorAll('header nav a')

console.log(headerLinks)

window.addEventListener("scroll", () => {
    if (window.scrollY > 800){
        header.style.backgroundColor = colors.lightblue
        header.style.height = "90px"
    }else{
        header.style.backgroundColor = "transparent"
        header.style.height = "120px"
    }
})
