import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

function ForYou() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);

 useEffect(() => {
  fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("BOOK DATA:", data);
      setSelectedBook(data[0]);
    });
}, []);
useEffect(() => {
  fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
  )
    .then((response) => response.json())
    .then((data) => {
      setRecommendedBooks(data);
    });
}, []);
useEffect(() => {
  fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
  )
    .then((response) => response.json())
    .then((data) => {
      setSuggestedBooks(data);
    });
}, []);
const saveBook = (book) => {
  const savedBooks =
    JSON.parse(localStorage.getItem("savedBooks")) || [];

  const alreadySaved = savedBooks.some(
    (savedBook) => savedBook.id === book.id
  );

  if (!alreadySaved) {
    savedBooks.push(book);
    localStorage.setItem(
      "savedBooks",
      JSON.stringify(savedBooks)
    );
  }
};
  return (
    <div className="foryou">
      <Sidebar />
      <div className="foryou__content">
        <SearchBar />
        <h1>For You</h1>

    <h2>Selected just for you</h2>

    {selectedBook && (
  <div className="selected__book--content">
    <img
      src={selectedBook.imageLink}
      alt={selectedBook.title}
    />

<div>
      <h3>{selectedBook.title}</h3>
      <p>{selectedBook.author}</p>
      <p>{selectedBook.subTitle}</p>
    </div>
  </div>
)}

<h2>Recommended For You</h2>

<div className="books">
  {recommendedBooks.map((book) => (
    <div className="book" key={book.id}>
      <img src={book.imageLink} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>

      <button onClick={() => saveBook(book)}>
  Save
</button>
    </div>
  ))}
 </div>

  <h2>Suggested For You</h2>

<div className="books">
  {suggestedBooks.map((book) => (
    <div className="book" key={book.id}>
      <img src={book.imageLink} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>

      <button onClick={() => saveBook(book)}>
  Save
</button>
    </div>
  ))}
</div>
</div>
</div>
  );
}

export default ForYou;