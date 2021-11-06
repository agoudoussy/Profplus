import { useState, useEffect } from 'react'
import DetailContainer from '../components/DetailContainer'
import DetailsSection from '../components/DetailSection'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'
import {db} from '../firebaseConfig';

function ProfDetail(props) {
    const [data, setData] = useState({});
    const ref = db.collection("prof");
    const getProfDetail = async(data) => {

      const query = await ref.doc(data).get();
      setData({
        ...query.data()
      })
      console.log(query.data())
      
      }
      

    useEffect(()=>{
        const id = (props.match.params.Profilid);
        console.log('data --------', id);
        getProfDetail(id)
    },[])
    return (
          data &&
            <div>
            <MenuBar />
            <DetailsSection info={data}/>
            <DetailContainer info={data}/>
            <Footer/>
        </div>
          
    )
}

export default ProfDetail
