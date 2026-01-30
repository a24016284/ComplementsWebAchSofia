class thermometre {

    constructor(){
        
    };


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



