<!-- VERIFICATION DES DOUBLONS POUR LE DOCUMENT CATEGORIE -->
1-Recuperer les données de la base de données;
2-Stocker ses données dans un tableau d'objet(categorieItems)
3-Parcourir le tableau (categorieItems) tout verifiant s'il y'a la presence d'une valeur qui est egale a celle recuperer dans le input qui sera stocker dans une variable (inputCategorie)
4-Ensuite faire la verification pour susciter une erreur ou un succès a afficher


db.collection("cours").add({
      cour: cours.cour,
      categorie: cours.categorie,
    });
    setCours({
      cour: "",
      categorie: "",
    });