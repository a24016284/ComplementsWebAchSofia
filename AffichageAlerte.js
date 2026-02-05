export class AffichageAlerte {
    update(valeur) {
        this.changercouleur(valeur);
        this.generermessage(valeur);
    }

    changercouleur(element) {
        var O_valeur = document.getElementById("temperature"); 
        if (element <= 0) {
            O_valeur.className = "bleu";
        } else if (element > 0 && element <= 20) {
            O_valeur.className = "vert";
        } else if (element > 20 && element <= 30) {
            O_valeur.className = "orange";
        } else {
            O_valeur.className = "rouge";
        }
    }

    generermessage(element) {
        var message = document.getElementById("message"); 
        if (element <= 0) {
            message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            message.hidden = false;
        } else if (element > 30) {
            message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
            message.hidden = false;
        } else {
            message.hidden = true;
        }
    }
}