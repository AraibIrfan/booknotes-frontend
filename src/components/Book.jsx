import React from "react";
import { Link } from "react-router-dom";

function Book({ data,isNotesVisible }) {
  return (
    <div className="container fs-6">
      <ul className="responsiveness">
        {data.map((book, index) => {
          return (
            <>
              <div className="m-3 p-2 fst-italic fw-lighter text-bg-light" style={{borderRadius:'5px',textAlign:'justify',display:'flex'}}>
                <li key={index} style={{ listStyleType: "none",padding:'5px',display:'flex',flexDirection:'column' }}>
                 <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                 <Link onClick={()=>{
                  isNotesVisible(true)
                 }} to={'/bookdetails'}><h3 style={{color:'black'}} className="fw-lighter"> {book.book_name} - {book.author_name} </h3> </Link> 
                    {/* <h4 className="fw-lighter"> </h4> */}
                  </div>
                  <div >
                  <p>{book.description}</p>
                  <p style={{float:'right'}} >
                    <b>{book.rating}</b>/10
                  </p>
                  </div>
                  
                </li>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Book;
