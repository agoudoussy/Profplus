import { db } from "../firebaseConfig";

const getData = (categorie) => {
  db.collection(categorie).onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    console.log(items);
    return items
  });
};

export { getData };
