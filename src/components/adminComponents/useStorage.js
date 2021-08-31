import React, { useState, useEffect } from "react";
import { storage } from "../../firebaseConfig";

const useStorage = (file) => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {

        const uploadTask = storage.ref(`images/${file.name}`);
        uploadTask.put(file).on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(file.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
              });
          }
        );
     
    
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
