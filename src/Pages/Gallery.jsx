import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Gallery = () => {

    const[infos, setInfos ] = useState([])

    useEffect(() => {

      setTimeout(() => {
        
      }, 5000);

      axios.get('http://localhost:8000/includes/db.inc/db.get.php')
            .then(function(response) {
/*               let allData = JSON.stringify(response.data);
              let fData = JSON.parse(allData) */

              let allData = response.data;
              setInfos(allData)
            })
            .catch(function(error){
              console.log(error.message)
            })
    }, [])


 

  return (
 
   <>

   
    
{
  infos

/*     {infos && infos.map(info => {
      return(
        <>
        </>
      )
    })} */}
   </>
  )
}

export default Gallery