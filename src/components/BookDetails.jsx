import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import axios from 'axios';


function BookDetails() {
  const [notes,setNotes] = useState([])
 

 async function submitHandler(event){
    event.preventDefault()
    try {
       await axios.post('http://localhost:3001/notes',{notes})
    } catch (error) {
      console.error(error)
    }
    console.log(notes)
  }
  return (
    <>
    
        <div  className='container d-flex flex-column  '>
        <div style={{textAlign:'center'}} className='mb-3'>
          <h3 style={{fontWeight:'100', fontStyle:'italic', marginBottom:'2rem'}}>Want to add some notes you found interesting in this book? </h3>
          <form onSubmit={submitHandler} method='POST'>
          <textarea placeholder=' Type here..' rows={5} required onChange={(e)=>{
            setNotes(e.target.value)
          }}/>
          <Button type='submit'>Submit</Button>
          </form>
          </div>
        </div>
   
    </>
  )
}

export default BookDetails