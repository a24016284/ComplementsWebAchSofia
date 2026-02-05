import {Observer} from "./Observer.js";
import {AfficheurValeur} from "../AfficheurValeur.js";
import {AffichageAlerte} from "../AffichageAlerte.js";
import {AffichageHistorique} from "../AffichageHistorique.js";  
 


class script {
    constructor() {
        this.sujetTemp = new Observer();
        
        this.obsValeur = new AfficheurValeur(); 
        this.obsAlerte = new AffichageAlerte();
        this.obsHisto = new AffichageHistorique();

        this.sujetTemp.subscribe(this.obsValeur);
        this.sujetTemp.subscribe(this.obsAlerte);
        this.sujetTemp.subscribe(this.obsHisto);

        this.AfficherPage();
        this.lancerSimulation();
    }

    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    lancerSimulation() {
        let i = 0;
        let interval = setInterval(() => {
            let nouvelleVal = this.getRandomArbitrary(-10, 40);
            this.sujetTemp.notifier(nouvelleVal);

            i++;
            if (i >= 20) clearInterval(interval);
        }, 2000);
    }

    AfficherPage() {
        const O_buttonTemperature = document.getElementById("buttontemp");
        const O_buttonHistorique = document.getElementById("buttonhistorique");
        let O_sectionTemperature = document.getElementById("temperatureAl");
        let O_sectionHistorique = document.getElementById("historiquetempAl");

        if(O_sectionHistorique) O_sectionHistorique.hidden = true;

        O_buttonHistorique?.addEventListener("click", () => {
            O_sectionHistorique.hidden = false;
            O_sectionTemperature.hidden = true;
        });

        O_buttonTemperature?.addEventListener("click", () => {
            O_sectionHistorique.hidden = true;
            O_sectionTemperature.hidden = false;
        });
    }
}

const test = new script();
