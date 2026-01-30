class historique {
    historique(object) { // Affiche l'historique des températures
        var O_historique = document.getElementById("historiquetemp"); 
        O_historique.textContent = object.join(", ");
        
    }
}