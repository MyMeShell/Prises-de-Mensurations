const tabContent = document.getElementsByClassName("page");       // const contient l'ensemble des onglets
for(i=0;i<tabContent.length;i++){      // vider la contenu de la page
    tabContent[i].style.display = "none";
}
document.getElementById("tab-home").style.display="flex";     // afficher la page d'acceuil

function changePage(pageName){  // Fonction pour naviguer avec les boutons
    for(i=0;i<tabContent.length;i++){
        tabContent[i].style.display = "none";    // efface tous onglets
    }
    document.getElementById(pageName).style.display="flex";   // ne laisse que l'onglet cliqué
};


const dataTabJS = [document.getElementById("pseudo-formulaire"), document.getElementById("tour-de-poitrine")];

const rubriqueFormulaire = document.getElementById("rubrique-formulaire");
const inputsFormulaire = rubriqueFormulaire.querySelectorAll('input');

console.log(rubriqueFormulaire);
console.log(typeof(inputsFormulaire[1].id));

let nombreDeFormulaires = 0;

class DooneesFormulaire{
    constructor(inputsDunFormulaire){
        let valeursInputsFormulaire = [];
        for(i=0;i<=inputsDunFormulaire.length;i++){
            valeursInputsFormulaire.push(this.inputsDunFormulaire[i].value);
        }
    }

}



function EnregistrerDonneesFormulaire(){
    //document.getElementById("pseudo-formulaire").textContent
    console.log(valeursInputsFormulaire[1]);
}



