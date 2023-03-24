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
let mobileWidth



function init(){
    headerNavDisplay(headerPosition, navigationOpen)
    mobileWidth = window.matchMedia("(max-width: 760px)")
    sectionActualites.innerHTML = carrousel(events)
    console.log(mobileWidth.matches)
}

init()

function headerPos(){
    let headerPosition = ""
    if (window.scrollY > hero.offsetHeight - 400){
        headerPosition = "body"
    }else{
        headerPosition = "top"
    }
    return headerPosition
}


headerMenuIcon.addEventListener("click", () => {
    
    navigationOpen = !navigationOpen
    headerNavDisplay(headerPos(), navigationOpen)
})

headerLogo.addEventListener("click", () => {
    navigationOpen = false
    headerNavDisplay("top", navigationOpen)
})

window.addEventListener("scroll", () => {
    headerNavDisplay(headerPos(), navigationOpen)
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


console.log(mobileWidth)

function carrousel(events){

    let html = ""
    let numberOfCards = 0
    console.log(mobileWidth)
    mobileWidth.matches? numberOfCards = 1 : numberOfCards = 3

    let eventsDisplay = events.slice(0,numberOfCards)
    eventsDisplay.forEach((evenement) => {
        html += 
        `
        <div class="news">
            <img src="${evenement.image}"/>
            <div class="news-text">
                <p>${evenement.date}</p>
                <h3>${evenement.nom}</h3>
                <p>${evenement.description}</p>
            </div>
        </div>
        `
    })

    return html
}


