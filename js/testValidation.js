function verifierChamp(champ) {
    // Si le champ est vide, on lance une exception
    if (champ.value === "") {
        throw new Error(`Le champ ${champ.id} est vide`)
    }
}

let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    try {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        verifierChamp(baliseNom)

        let balisePrenom = document.getElementById("prenom")
        verifierChamp(balisePrenom)

        let baliseSurnom = document.getElementById("surnom")
        verifierChamp(baliseSurnom)

        // traitement du formulaire
        // ...
    } catch (error) {
        console.log("Une erreur est survenue : " + error.message)
    }
})
