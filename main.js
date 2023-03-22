console.log("hello")

import {events} from "./data.js"

const colors = {
    "white": "#fff",
    "green": "#b9dbb4",
    "lightblue": "#8dc5d5",
    "blue": "#0667a9",
    "darkblue": "#246c93"
}

const header = document.getElementById("header")
const headerLogo = document.getElementById("header-logo")
const headerLinks = document.querySelectorAll('header nav a')
const sectionActualites = document.getElementById("section-actualites")
const news = document.querySelectorAll("news")
const leftButton = document.getElementById("news-left-button")
const rightButton = document.getElementById("news-right-button")





function init(){
    console.log("initialize")
    sectionActualites.innerHTML = carrousel(events)
}

init()



console.log(events)

window.addEventListener("scroll", () => {
    if (window.scrollY > 1000){
        header.style.backgroundColor = colors.lightblue
        headerLogo.style.marginLeft = "120px"
        header.style.height = "120px"
    }else{
        header.style.backgroundColor = "transparent"
        header.style.height = "160px"
        headerLogo.style.marginLeft = "-160px"
    }
})



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


