// Fonction générant un nombre random entre min et max
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Tableau de nombres
var A_tableau = [];
for (var i = 0; i < 20; i++) {
    A_tableau.push(getRandomArbitrary(-10, 40)); //ajout du nombre random au tableau
}
console.log("Tableau A:", A_tableau);

var i = 0;

// Fonction pour afficher la valeur dans le HTML
function generervaleur() {
    var O_valeur = document.getElementById("valeur"); 
    var A_tableautemp = []; // Tableau pour stocker l'historique des températures
    
    var O_Interval = setInterval(() => {  
        O_valeur.textContent =  A_tableau[i];
        console.log("Valeur actuelle : " + A_tableau[i]); 
        
        changercouleur(A_tableau[i]); 
        generermessage(A_tableau[i]);
        A_tableautemp.push(A_tableau[i]); // Ajout de la température actuelle à l'historique
        
        historique(A_tableautemp); // Appel de la fonction pour afficher l'historique
        i++;
        if (i >= A_tableau.length) {
            clearInterval(O_Interval);
        }
    }, 2000);
}

function changercouleur(element) { // Change la couleur de la bordure en fonction de la température
    var O_valeur = document.getElementById("température"); 
    if (element <= 0) {
        O_valeur.className = "bleu";
        console.log("bleu");
    } else if (element > 0 && element <= 20) {
        O_valeur.className = "vert";
        console.log("vert");
    } else if (element > 20 && element <= 30) {
        O_valeur.className = "orange";
        console.log("orange");
    } else {
        O_valeur.className = "rouge";
        console.log("rouge");
    }
}

function generermessage(element) { // Génère un message en fonction de la température
    var message = document.getElementById("message"); 
    message.hidden = true;
    if (element <= 0) {
        message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        message.hidden = false;
        console.log(message.textContent);
    } else if (element > 30) {
        message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        message.hidden = false;
        console.log(message.textContent);

    }
    else {
        message.hidden = true;
        console.log("message caché");
    }
   
}

function historique(object) { // Affiche l'historique des températures
    var O_historique = document.getElementById("historiquetemp"); 
    O_historique.textContent = object.join(", ");
    
}

generervaleur();
