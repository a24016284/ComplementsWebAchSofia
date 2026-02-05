export class AfficheurValeur {
    update(valeur) {
        var O_valeur = document.getElementById("temp");
        O_valeur.textContent = valeur + " °C";
        console.log("Valeur actuelle : " + valeur + "°C");
    }
}

