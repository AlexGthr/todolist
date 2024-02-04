function ajoutCards() {

    let todoCard = document.querySelector(".todoCard")
    let cloneTodoCard = todoCard.cloneNode(true)

    let textAreaCard = cloneTodoCard.querySelector('.task')
    textAreaCard.value = "New task";

    let boardTodo = document.getElementById("todoCards")
    boardTodo.appendChild(cloneTodoCard)

    count++

    let countCard = document.getElementById("count")
    countCard.innerText = "Actuellement : " + count + " tâches";

    let btnDel = cloneTodoCard.querySelector(".delBtn")
    btnDel.addEventListener("click", function() {

        supprimerCards(cloneTodoCard)

    })

}

function supprimerCards(card) {
    if (count > 1) {

        let boardTodo = document.getElementById("todoCards")
        boardTodo.removeChild(card);

        count--;

        let countCard = document.getElementById("count")
        countCard.innerText = "Actuellement : " + count + " tâches";
    }
    else {
        showReaction("erreur", card)
        console.log("tu peux pas")
    }
}

function showReaction(type, card) {
    card.classList.add(type)
    if(type == "erreur") {
        setTimeout(function() {
            card.classList.remove(type)
        }, 800)
    }
}


let btnAddTask = document.getElementById("btn")
btnAddTask.addEventListener('click', ajoutCards)

let count = 1;

let btnDel = document.querySelector('.delBtn')
btnDel.addEventListener('click', function() {

    supprimerCards(document.querySelector(".todoCard"))

})