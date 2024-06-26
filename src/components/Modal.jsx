import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { X } from "lucide-react";
import axios from "axios";
// import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/esm/Button";

function Modal({fetchBook ,onClose}) {
  const navigate = useNavigate()
  const [data, setData] = useState({
    authorName: "",
    bookName: "",
    description: "",
    rating: ""
  })
  async function submitHandler(event) {
    event.preventDefault()
    console.log(data)
    try {
      await axios.post("http://localhost:3001/bookdata", {
        data
      })
      await fetchBook()
      onClose()
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }


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
              <button
                className="button"
                style={{ border: "none", float: "right" }}
              >
                <X onClick={onClose} />
              </button>
            </div>
            <div>
              <p className="p-2 fs-2 fst-italic text-center fw-lighter text-bg-light">
                Want to post a book that you've read? Go ahead.
              </p>
            </div>

            <div className="container text-center">
              <form onSubmit={submitHandler} method="POST">
                <input name="Author Name" placeholder="Author name" required onChange={(e) => setData({
                  ...data,
                  authorName: e.target.value
                })} />
                <input name="Book name" placeholder="Book name" required onChange={(e) => setData({
                  ...data,
                  bookName: e.target.value
                })} />
                <input name="Rate" placeholder="Rate it out of 10" required onChange={(e) => setData({
                  ...data,
                  rating: e.target.value
                })} />
                <textarea name="description" placeholder="Short description of book" rows={5} required onChange={(e) => setData({
                  ...data,
                  description: e.target.value
                })} />
                <br />
               <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
