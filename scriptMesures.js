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


const formulairesEnreigstres = [];      // Liste des menurations enregistrées

const rubriqueFormulaire = document.getElementById("rubrique-formulaire");      // Récupère la valeur des inputs du formulaire
const saveButton = document.getElementById('save-button');      // Récupère la valeur du bouton enregistré

let nombreDeFormulaires = -1;   // Nombre de formualires enregistrés - 1

console.log(rubriqueFormulaire);
console.log(saveButton);



saveButton.addEventListener('click', () => {

    // Récupère la valeur des inputs contenants les mensurations à enregistrer
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
 
    // Instancie la variable locale d'objet
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

    const SavedMeasurements = document.getElementById('saved-measurements');   // Balise des mensurations enregistrées

    formulairesEnreigstres.push(nouvellesDonnees);    // On implémente les valeurs des inputs (stockés dans la variable locale d'objet) à notre tableau des formulaires
    nombreDeFormulaires++;          // on incrémente le nombre de formulaires enregistrés
 
    console.log(nouvellesDonnees);
    console.log(formulairesEnreigstres[0]);
    console.log(formulairesEnreigstres[nombreDeFormulaires]);
    console.log(typeof(formulairesEnreigstres[nombreDeFormulaires]));

    
    console.log(Object.keys(formulairesEnreigstres[0])[0] + " : " + formulairesEnreigstres[0][Object.keys(formulairesEnreigstres[0])[0]]);
    console.log(Object.keys(formulairesEnreigstres[0])[1] + " : " + formulairesEnreigstres[0][Object.keys(formulairesEnreigstres[0])[1]]);
    console.log(Object.keys(formulairesEnreigstres[0]).length);
    console.log(formulairesEnreigstres.length);

    showSizes = "";

    // On ajoute une balise qui va afficher les valeurs enresgitrées à notre page des mensurations sauvegardées
    for(j=0; j< Object.keys(formulairesEnreigstres[0]).length; j++){
        console.log(Object.keys(formulairesEnreigstres[nombreDeFormulaires])[j] + " : " + formulairesEnreigstres[nombreDeFormulaires][Object.keys(formulairesEnreigstres[nombreDeFormulaires])[j]]);
        showSizes = showSizes + Object.keys(formulairesEnreigstres[nombreDeFormulaires])[j] + " : " + formulairesEnreigstres[nombreDeFormulaires][Object.keys(formulairesEnreigstres[nombreDeFormulaires])[j]] + "\n";
        showSizes.split('\n');
    }
    console.log(showSizes);

    const measurementTab = document.createElement('table');
    //measurementTab.style.width = '50%';

    for(const propriete in formulairesEnreigstres[nombreDeFormulaires]){
        const ligne = document.createElement('tr');
        const cellulePropriete = document.createElement('td');
        const celluleValeur = document.createElement('td');
    
        cellulePropriete.textContent = propriete;
        celluleValeur.textContent = formulairesEnreigstres[nombreDeFormulaires][propriete];

        ligne.appendChild(cellulePropriete);
        ligne.appendChild(celluleValeur);

        measurementTab.appendChild(ligne);

    }

    SavedMeasurements.appendChild(measurementTab);

    changePage("tab-home");  //Nous dirige à la page Home
});