import React from "react";
import { X } from "lucide-react";

function Modal(props) {
  return (
    <>
      <div className="backdrop">
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "50%",
              width: "50%",
              color: "black",
            }}
          >
            <div>
              <button style={{ border: "none", float: "right" }}>
                <X onClick={props.onClose} />
              </button>
            </div>
            <div>
              <p className="p-2 fs-2 fst-italic text-center fw-lighter text-bg-light">
                Want to post a book that you've read? Go ahead.
              </p>
            </div>

            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
            <div style={{display:'flex',gap:'10px',flexDirection:'column',width:'80%'}}>
              <span>
                {/* <label>Author Name: </label> */}
                <input placeholder="Enter author's name" required />
              </span>
              <br />
              <span>
                {/* <label>Book Name: </label> */}
                <input placeholder="Enter book's name" required />
              </span>
              <br />
              <span>
                {/* <label>Description: </label> */}
               <textarea placeholder="Enter book's description"></textarea>
              </span>
              <br />
              <span>
                {/* <label>Rating: </label> */}
                <input placeholder="Enter book's rating out of 10" required />
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
