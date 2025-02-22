// __________Déclaration de la Liste de Tâches__________
let listeDeTaches = [] // Tableau vide                                                    1

const addTaskButton = document.getElementById("addTaskButton") // Bouton Ajouter
const taskInput = document.getElementById("taskInput") // Barre d'entrée de texte
const taskList = document.getElementById("taskList") // Liste de tâche sous forme d'ul

// __________Fonction ajouterTache__________
function ajouterTache() {
    const nouvelleTache = taskInput.value // nouvelleTache est égale à la valeur qu'on va entrer dans taskInput              3
    if (nouvelleTache) { // Si nouvelletache n'est pas vide
        listeDeTaches.push(nouvelleTache)
        afficherTaches()
        taskInput.value=""                                                                                             // ajout de cette ligne pour remettre l'input vide apres le click
    }
}
addTaskButton.addEventListener('click', ajouterTache)

// __________Fonction afficherTaches__________
function afficherTaches() {                                                                                                    4
    taskList.innerHTML = ""
    listeDeTaches.forEach((tache, index) => {
        taskList.innerHTML += `<li>${tache} <button onclick="supprimerTache(${index})">Supprimer</button></li>`
    })
}

// __________Fonction supprimerTache__________ //                                                                                4


function supprimerTache(index) {
    listeDeTaches.splice(index, 1);
    afficherTaches();
}


// 4.5
// 1
// 1

//18.5/20

