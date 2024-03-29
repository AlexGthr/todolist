
// On récupère ici le bouton addTask pour ajouter une tâche 
let btnAddTask = document.getElementById("btn")

let count = 1; // On déclare ici le compteur, à 1 de base

// On récupère ici le bouton delete de la div principale (et non du clone) pour pouvoir aussi supprimer cette cards
let btnDel = document.querySelector('.delBtn')

// Function pour ajouter une Card
function ajoutCard() {

    // On récupère la classe todoCard et on le clone (1)
    let todoCard = document.querySelector(".todoCard")
    let cloneTodoCard = todoCard.cloneNode(true)

    // On récupère le textArea de la card et on le remet par defaut (2)
    let textAreaCard = cloneTodoCard.querySelector('.task')
    textAreaCard.value = "New task";

    // On récupère la div entière et on lui ajoute le clone de la card (3)
    let boardTodo = document.getElementById("todoCards")
    boardTodo.appendChild(cloneTodoCard)

    count++ // On incrémente ici le compteur

    compteur() // On utilise la function compteur() pour afficher le nouveau compteur

    // On déclare une variable btnDel qui utilisera la function supprimerCard pour supprimer un CLONE
    let btnDel = cloneTodoCard.querySelector(".delBtn")
    btnDel.addEventListener("click", function() {

        supprimerCard(cloneTodoCard)

    })

}

// Function pour supprimer une card
function supprimerCard(card) {
    if (count > 1) {

        let boardTodo = document.getElementById("todoCards")
        boardTodo.removeChild(card);

        count--;

        compteur()
    }
    else {
        showReaction("erreur", card) // On utilise une function showReaction si c'est la dernière cards
    }
}

// Function qui modifie la phrase du compteur
function compteur() {
    
    let countCard = document.getElementById("count")

    if (count > 1) {

        countCard.textContent = "Actuellement : " + count + " tâches";
    } else {

        countCard.textContent = "Actuellement : " + count + " tâche";
    }

}

// Function showReaction pour donner un peu de style quand un utilisateur essaye de supprimer la dernière cards
function showReaction(type, card) {
    card.classList.add(type)
    if(type == "erreur") {
        setTimeout(function() {
            card.classList.remove(type)
        }, 500)
    }
}

btnAddTask.addEventListener('click', ajoutCard)

btnDel.addEventListener('click', function() {

    supprimerCard(document.querySelector(".todoCard"))

})