import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import DetailContainer from '../components/DetailContainer'
import DetailsSection from '../components/DetailSection'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'
import {db} from '../firebaseConfig';

function ProfDetail(props) {
    const [id, setId] = useState({});
    const ref = db.collection("prof");
    const getProfDetail = async(data) => {

      const query = await ref.where('email', '==', `${data}`).get();
      setId({
        ...query.docs[0].data()
      })
      console.log(query.docs[0].data())
      
      }
      

    useEffect(()=>{
        const data = (props.match.params.Profilid);
        console.log('data --------', data);
        getProfDetail(data);
    },[])
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
