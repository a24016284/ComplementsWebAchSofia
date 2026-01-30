class thermometre {
    A_tableau = [];
    I_i = 0;

    constructor(){
        // Tableau de nombres
        for (var i = 0; i < 20; i++) {
            this.A_tableau.push(this.getRandomArbitrary(-10, 40)); //ajout du nombre random au tableau 
        }   
        console.log("Tableau A:", this.A_tableau);

        this.generervaleur(this.A_tableau, this.I_i);
        this.AfficherPage();
    };
    


    // Fonction générant un nombre random entre min et max
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Fonction pour afficher la valeur dans le HTML
    generervaleur(A_tableau, I_i) {
        var O_valeur = document.getElementById("valeur"); 
        var A_tableautemp = []; // Tableau pour stocker l'historique des températures
        
        var O_Interval = setInterval(() => {  
            O_valeur.textContent =  A_tableau[I_i] + " °C";
            console.log("Valeur actuelle : " + A_tableau[I_i] + "°C"); 
            
            this.changercouleur(A_tableau[I_i]); 
            this.generermessage(A_tableau[I_i]);
            A_tableautemp.push(A_tableau[I_i]); // Ajout de la température actuelle à l'historique
            
            this.historique(A_tableautemp); // Appel de la fonction pour afficher l'historique
            I_i++;
            if (I_i >= A_tableau.length) {
                clearInterval(O_Interval);
            }
        }, 2000);
    }


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

    historique(object) { // Affiche l'historique des températures
        var O_historique = document.getElementById("historiquetemp"); 
        O_historique.textContent = object.join(", ");
        
    }

    AfficherPage(){
        const O_buttonTemperature = document.getElementById("buttontemp");
        const O_buttonHistorique = document.getElementById("buttonhistorique");

        let O_sectionTemperature = document.getElementById("temperatureAl");
        let O_sectionHistorique = document.getElementById("historiquetempAl");

        O_sectionHistorique.hidden = true;
        O_sectionTemperature.hidden = true;


        O_buttonHistorique.addEventListener("click", function () {
            O_sectionHistorique.hidden = false;
            O_sectionTemperature.hidden = true;
        });

        O_buttonTemperature.addEventListener("click", function() {
            O_sectionHistorique.hidden = true;
            O_sectionTemperature.hidden = false;
        });



    }

    


}







test = new thermometre();



