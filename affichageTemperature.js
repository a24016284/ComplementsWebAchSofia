class temperature {
    changercouleur(element) { // Change la couleur de la bordure en fonction de la température
        var O_valeur = document.getElementById("temperature"); 
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

    generermessage(element) { // Génère un message en fonction de la température
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
}   