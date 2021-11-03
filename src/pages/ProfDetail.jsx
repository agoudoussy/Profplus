import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import DetailContainer from '../components/DetailContainer'
import DetailsSection from '../components/DetailSection'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'
import {db} from '../firebaseConfig';

function ProfDetail(props) {
    const [id, setId] = useState([]);
    const ref = db.collection("prof");
    const getProfDetail = async(data) => {
      ref
      .where("email", "==", `${data}`)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setId(doc.data())
        });
      });

      }
      

    useEffect((id)=>{
        const data = (props.match.params.Profilid);
        getProfDetail(data);

    },[id])
    return (
        <div>
            <MenuBar />
            <DetailsSection info={id}/>
            <DetailContainer info={id}/>
            <Footer/>
        </div>
    )
}

export default ProfDetail
