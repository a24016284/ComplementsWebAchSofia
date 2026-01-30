class ValeurTemperature {
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

}







test = new thermometre();



