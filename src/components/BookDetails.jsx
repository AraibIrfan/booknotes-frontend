import React, {  useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { useParams } from 'react-router-dom';


function BookDetails() {
  
  const {book_id} = useParams();
  const [noteData,setNoteData] = useState([])
   const [notes, setNotes] = useState({
    note:""
   })
   
   async function getNotes(){
    try {
      const response = await axios.get(`https://booknotes-backend-1.onrender.com/notes/${book_id}`)
      setNoteData(response.data)
    } catch (error) {
      console.error(error)  
    }
    
   }


useEffect(()=>{
 getNotes()
 
})

  async function submitHandler(event) {
    event.preventDefault()
    try {
      await axios.post(`https://booknotes-backend-1.onrender.com/notes/${book_id}`, {  notes })
      setNotes({note:""}) 
      await getNotes()

    } catch (error) {
      console.error(error)
    }
  
  }
  return (
    <>

      <div className='container d-flex flex-column  '>
        <div style={{ textAlign: 'center' }} className='mb-3'>
          <h3 style={{ fontWeight: '100', fontStyle: 'italic', marginBottom: '2rem' }}>Want to add some notes you found interesting in this book? </h3>
          <div className='container text-center'>
            <form onSubmit={submitHandler} method='POST'>
              <textarea placeholder=' Type here..' rows={5} required onChange={(e) => {
                setNotes({
                  ...notes,
                  note:e.target.value})
              }} />
              <br />
              <Button  type='submit'>Submit</Button>
            </form>
          </div>
        </div>
        <ul className='container notes grid'>
          {noteData.map((note,index)=>{
            return <>
            <li key={index}>{note.note}</li>
            </>
          })}
        </ul>
      </div>
      
    
    </>
  )
}

export default BookDetails