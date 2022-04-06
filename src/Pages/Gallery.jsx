import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Gallery = () => {

    const[infos, setInfos ] = useState([])
    const[loader, isLoader] = useState(true);

    useEffect(() => {

      setTimeout(() => {
        
      }, 5000);

      axios.get('http://localhost:8000/includes/db.inc/db.get.php')
            .then(function(response) {
              let allData = response.data;
              setInfos(allData)
            })
            .catch(function(error){
              console.log(error.message)
            })
    }, [])


 

  return (
 
   <> {infos}
   </>
  )
}

export default Gallery