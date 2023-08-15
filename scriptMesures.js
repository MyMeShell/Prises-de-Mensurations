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

function SaveCreation(pageName){  // Fonction qui enregistre les mensurations
    changePage(pageName);

}