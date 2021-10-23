<!-- VERIFICATION DES DOUBLONS POUR LE DOCUMENT CATEGORIE -->
1-Recuperer les données de la base de données;
2-Stocker ses données dans un tableau d'objet(categorieItems)
3-Parcourir le tableau (categorieItems) tout verifiant s'il y'a la presence d'une valeur qui est egale a celle recuperer dans le input qui sera stocker dans une variable (inputCategorie)
4-Ensuite faire la verification pour susciter une erreur ou un succès a afficher
 if (catFound && !found) {
        setCour(cour.concat(newValue));
        console.log(cour);
        console.log("ajouter ce nouveau cours a cette categorie");
    } else if (!catFound) {
      console.log("ajouter une nouvelle categorie");
    }else if(catFound && found){
      console.log("ce cour existe déjà dans la categorie " + cours.categorie);
    }

db.collection("cours").add({
      cour: cours.cour,
      categorie: cours.categorie,
    });
    setCours({
      cour: "",
      categorie: "",
    });                                     

for (let i = 0; i < courList.length; i++) {
      setCour(courList[i]);
    }
    const found = cour.some((elem) => elem == cours.cour);
    if (catFound && found) {
      console.log(cour);
      console.log("ce cour existe déjà dans la categorie " + cours.categorie);
    } else if (catFound && !found) {
      console.log(found);
      console.log("ajouter ce nouveau cours a cette categorie");
      getCategorieId();
      return;
    } else if (!catFound) {
      console.log(catFound);
      console.log("ajouter une nouvelle categorie");
    }



