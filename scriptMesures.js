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


const formulairesEnreigstres = [];

const rubriqueFormulaire = document.getElementById("rubrique-formulaire");
const saveButton = document.getElementById('save-button');

let nombreDeFormulaires = -1;

console.log(rubriqueFormulaire);
console.log(saveButton);

const SavedMeasurement = document.getElementById('saved-measurement');

saveButton.addEventListener('click', () => {

    const pseudoFormulaire = document.getElementById('pseudo-formulaire').value;
    const tourDePoitrine = document.getElementById('tour-de-poitrine').value;
    const tourDeTaille = document.getElementById('tour-de-taille').value;
    const tourDeHanches = document.getElementById('tour-de-hanches').value;
    const longueurDEpaule = document.getElementById('longueur-d-epaule').value;
    const longueurDeManche = document.getElementById('longueur-de-manche').value;
    const tourDeBras = document.getElementById('tour-de-bras').value;
    const longueurPontalonJupe = document.getElementById('longueur-pontalon-jupe').value;
    const longueurDEntrejambe = document.getElementById('longueur-d-entrejambe').value;
    const tourDeCou = document.getElementById('tour-de-cou').value;
    const hauteur = document.getElementById('hauteur').value;
    const carrure = document.getElementById('carrure').value;
    const tourDePoignet = document.getElementById('tour-de-poignet').value;
    const tourDeCuisse = document.getElementById('tour-de-cuisse').value;
    const tourDeMollet = document.getElementById('tour-de-mollet').value;
    const tourDeCheville = document.getElementById('tour-de-cheville').value;
 
    const nouvellesDonnees = {
        pseudoFormulaire, 
        tourDePoitrine,
        tourDeTaille,
        tourDeHanches,
        longueurDEpaule,
        longueurDeManche,
        tourDeBras,
        longueurPontalonJupe,
        longueurDEntrejambe,
        tourDeCou,
        hauteur,
        carrure,
        tourDePoignet,
        tourDeCuisse,
        tourDeMollet,
        tourDeCheville    
    };

    nombreDeFormulaires++;
    formulairesEnreigstres.push(nouvellesDonnees);

    console.log(nouvellesDonnees);
    console.log(formulairesEnreigstres[0]);

    
    console.log(Object.keys(formulairesEnreigstres[0])[0] + " : " + formulairesEnreigstres[0][Object.keys(formulairesEnreigstres[0])[0]]);
    console.log(Object.keys(formulairesEnreigstres[0])[1] + " : " + formulairesEnreigstres[0][Object.keys(formulairesEnreigstres[0])[1]]);
    console.log(Object.keys(formulairesEnreigstres[0]).length);
    console.log(formulairesEnreigstres.length);

    for(j=0; j< Object.keys(formulairesEnreigstres[0]).length; j++){
        console.log(Object.keys(formulairesEnreigstres[nombreDeFormulaires])[j] + " : " + formulairesEnreigstres[nombreDeFormulaires][Object.keys(formulairesEnreigstres[nombreDeFormulaires])[j]]);
    }
    


    changePage("tab-home");
});