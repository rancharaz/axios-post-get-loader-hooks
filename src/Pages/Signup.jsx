import React, {useState} from 'react'
import axios from 'axios';
const Signup = () => {

  const url = "http://localhost:8000/includes/db.inc/db.inc.php";

/*   const url = "http://localhost:8000/includes/curlPost.php"; */

  const[data, setData] = useState({
     fname: "",
     fphone: "",
     fmail: ""
  })

  function submit(e){
     e.preventDefault();
     axios.post(url, {
      fname: data.fname,
       fphone: data.fphone,
       fmail: data.fmail,

       headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Crossorigin' : 'true',
 
    }
     }, 

     )
     .then(function(response) {
       console.log(response.data)
     }).catch(function(error){
       console.log(error.message)
     })
  }

  function handle(e){
      
    const newData = { ...data}
    newData[e.target.id] = e.target.value;
    setData(newData)
    console.log(newData)
  }


  return (
    <>
    <div className="container mx-auto text-center align-middle">

    
      <form onSubmit={(e) => submit(e)}  >
      <div className="form ">
          <h1 className='text-4xl mt-'>Form</h1>
          <div className="group-form">
            <label htmlFor='name'> Name: </label>
         <input type="text" name="fname" id="fname" onChange={(e) => handle(e)} value={data.fname} className='name mt-5 rounded-sm text-slate-800 outline-none'/> 
          </div>
          <div className="group-form">
            <label htmlFor='name'> Phone num: </label>
         <input type="text" name="fphone" id="fphone" onChange={(e) => handle(e)} value={data.fphone} className='name mt-5 rounded-sm text-slate-800 outline-none'/> 
          </div>
           <div className="group-form">
             <label htmlFor="surname">
             Email:  </label>
           <input type="email" name="fmail" id="fmail" onChange={(e) => handle(e)} value={data.fmail} className='surname mt-5 rounded-sm text-slate-800 outline-none'/>

           <div className="btn">
           <button type="submit" className='btn-signup'>Submit</button>
           </div>
          
           </div>
          
        </div>
      </form>

    </div>
    </>
  )
}

export default Signup