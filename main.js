console.log("hello")

import {events} from "./data.js"

const header = document.getElementById("header")
const headerLogo = document.getElementById("header-logo")
const headerLinks = document.querySelectorAll('header nav a')
const sectionActualites = document.getElementById("section-actualites")
const news = document.querySelectorAll("news")
const leftButton = document.getElementById("news-left-button")
const rightButton = document.getElementById("news-right-button")
const hero = document.getElementById("hero")
const headerMenuIcon = document.getElementById("header-menu-icon")
const headerNav = document.getElementById("header-nav")



let headerPosition = "top"
let navigationOpen = false


function init(){
    headerNavDisplay(headerPosition, navigationOpen)
    sectionActualites.innerHTML = carrousel(events)

}

init()

headerMenuIcon.addEventListener("click", () => {
    
    navigationOpen = !navigationOpen
    console.log(navigationOpen)
    if (window.scrollY > hero.offsetHeight){
        headerPosition = "body"
    }else{
        headerPosition = "top"
    }
    headerNavDisplay(headerPosition, navigationOpen)
})

headerLogo.addEventListener("click", () => {
    navigationOpen = false
    headerNavDisplay("top", navigationOpen)
})

window.addEventListener("scroll", () => {
    let headerPosition = ""
    if (window.scrollY > hero.offsetHeight){
        headerPosition = "body"
    }else{
        headerPosition = "top"
    }

    console.log(headerPosition)
    headerNavDisplay(headerPosition, navigationOpen)
})

headerNav.addEventListener("click", () => {
    navigationOpen = !navigationOpen

    if (window.scrollY > hero.offsetHeight){
        headerPosition = "body"
    }else{
        headerPosition = "top"
    }

    headerNavDisplay(headerPosition, navigationOpen)
})



function headerNavDisplay(headerPosition, navigationOpen){

    if (headerPosition === "top" && navigationOpen==false){
        header.setAttribute("id", "transparent-header")
    }

    if (headerPosition === "body"){
        header.setAttribute("id", "blue-header")
    }

    if (navigationOpen){
        header.setAttribute("id", "blue-header")
        headerNav.removeAttribute("class", "header-nav-no-display")
    }else{
        headerNav.setAttribute("class", "header-nav-no-display" )
    }
}


leftButton.onclick = () => {

    let shiftingItems = events.shift()
    events.push(shiftingItems)
    console.log(events)
    sectionActualites.innerHTML = carrousel(events)
}

rightButton.onclick = () => {

    let shiftingItems = events.pop()
    events.unshift(shiftingItems)
    console.log(events)
    sectionActualites.innerHTML = carrousel(events)
}

function carrousel(events){

    let html = ""

    /*
    html = `
        <div class="news">
            <h3>${events[indexUn].nom}</h3>
            <p>${events[indexUn].date}</p>
        </div>
        <div class="news">
            <h3>${events[indexDeux].nom}</h3>
            <p>${events[indexDeux].date}</p>
        </div>
        <div class="news">
            <h3>${events[indexTrois].nom}</h3>
            <p>${events[indexTrois].date}</p>
        </div>
    `
    */

    let eventsDisplay = events.slice(0,3)
    console.log(eventsDisplay)
    eventsDisplay.forEach((evenement) => {
        html += 
        `
        <div class="news" style="background-image: url(${evenement.image}); 
                                background-position:"center"
                                >
            <h3>${evenement.nom}</h3>
            <p>${evenement.description}</p>
            <p>${evenement.date}</p>
        </div>
        `
    })

    return html
}


