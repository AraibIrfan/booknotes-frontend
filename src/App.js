import { useEffect, useState } from "react";
import axios from 'axios'
import Book from "./components/Book";
import { Routes, Route, Link } from "react-router-dom";
import SortingBtn from "./components/SortingBtn";
import Button from "react-bootstrap/esm/Button";
import BookDetails from "./components/BookDetails"
import Modal from "./components/Modal";


// import SortBooksbyAuthor from "./components/SortBooksbyAuthor";

function App() {
  const [bookData, setBookData] = useState([])
  const [sortByAuthorData, setsortByAuthorData] = useState([])
  const [sortByTitleData, setSortByTitleData] = useState([])
  // const [data,setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showOnlyNotes, setShowOnlyNotes] = useState(false)

  // function getData(data){
  //   setData((existingData)=>[data,...existingData])

  // }
  async function fetchBook() {
    try {
      const response = await axios.get("https://booknotes-backend-1.onrender.com/")
      setBookData(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {

    fetchBook()
    async function sortBooksbyAuthor() {
      try {
        const response = await axios.get('https://booknotes-backend-1.onrender.com/api-sortbyauthor')
        setsortByAuthorData(response.data)

      } catch (error) {
        console.error(error)
      }
    }
    async function sortBooksbyTitle() {
      try {
        const response = await axios.get('https://booknotes-backend-1.onrender.com/api-sortbytitle')
        setSortByTitleData(response.data)


      } catch (error) {
        console.error(error)
      }
    }

    sortBooksbyAuthor();
    sortBooksbyTitle();
  }, [])



  return (

    <div className="p-5 container App">
    {showOnlyNotes ? null : <div>
        <h1 className="text-left fst-italic fw-lighter">BOOK NOTES</h1> <br />
        <h2 className="fw-light fst-italic">BOOKS I'VE READ</h2> <br />
        <div className="container">
          <Link to={'/modal'}> <Button onClick={() => setShowModal(true)} style={{ float: 'right', marginRight: '15px' }}>Post a book</Button></Link>
        </div>
        <div className="container p-3 d-flex justify-content-center align-items-center column-gap-3 ">

          <span className="text-white fst-italic fs-4 ">Sort By </span>
          <span>
            <Link to={'/sortbyauthor'}><SortingBtn sortTitle='Author' /></Link>

          </span>
          <span>
            <Link to={"/sortbytitle"}><SortingBtn sortTitle='Title' /></Link>
          </span>
        </div>
      </div>}
      
      {/* <Book data={bookData} /> */}
      {showModal && <Modal fetchBook={fetchBook} onClose={() => setShowModal(false)} />}

      <Routes>
        <Route path="/" element={<Book data={bookData} isNotesVisible={setShowOnlyNotes} />} />
        <Route path="/sortbyauthor" element={<Book data={sortByAuthorData} />} />
        <Route path="/sortbytitle" element={<Book data={sortByTitleData} />} />
        <Route path="/bookdetails" element={<BookDetails />} />
      </Routes>



    </div>
  );
}
export default App;
