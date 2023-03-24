console.log("data")

const formulaire = document.getElementById("formulaire")
const data = document.getElementById("data")

formulaire && formulaire.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
})

class Event {
    constructor(nom, description, image, date) {
        this.nom = nom
        this.description = description
        this.image = image
        this.date = date
    }
}



export let events = [
    {
        "nom" : "Tournoi",
        "description" : "Des matchs intenses et une ambiance conviviale : Retour sur le tournoi de padel de notre club",
        "image" : "./images/le-padel-tennis-est-un-sport-tres-spectaculaire-ici-sur-le_5266766_1000x526.jpg",
        "date": "15/09/2023"
    },
    {
        "nom" : "Nouveau coach",
        "description" : "Renfort de choix pour notre club de padel : Présentation de notre nouveau coach !",
        "image" : "./images/Coach_&_trainer.jpg",
        "date": "8/08/2023"
    },
    {
        "nom" : "Championnat de France",
        "description" : "Victoire de notre joueuse au championnat de France",
        "image" : "./images/JUGADORA_DE_PADEL.jpg",
        "date": "18/07/2023"
    },
    {
        "nom" : "Nouveau coach",
        "description" : "Renfort de choix pour notre club de padel : Présentation de notre nouveau coach !",
        "image" : "./images/Coach_&_trainer.jpg",
        "date": "8/08/2023"
    }
]

events.push(new Event("classe", "fnioazhochaoifio", "niqevninef", "4 juin"))
events.pop()


if (data){
    events.forEach((e) => {
        data.innerHTML += JSON.stringify(e)
    })
}