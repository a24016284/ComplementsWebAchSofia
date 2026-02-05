export class AffichageHistorique {
    constructor() {
        this.A_tableautemp = [];
    }

    update(valeur) {
        this.A_tableautemp.push(valeur);
        this.historique(this.A_tableautemp);
    }

    historique(object) {
        var O_historique = document.getElementById("historiquetemp"); 
        O_historique.textContent = object.join(", ");
    }
}