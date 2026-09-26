import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";

function MyLibrary() {
  const [savedBooks, setSavedBooks] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedBooks")) || [];
    const finished = JSON.parse(localStorage.getItem("finishedBooks")) || [];

    setSavedBooks(saved);
    setFinishedBooks(finished);
  }, []);

const markAsFinished = (book) => {
  const updatedSavedBooks = savedBooks.filter(
    (savedBook) => savedBook.id !== book.id
  );

  const updatedFinishedBooks = [...finishedBooks, book];

  setSavedBooks(updatedSavedBooks);
  setFinishedBooks(updatedFinishedBooks);

  localStorage.setItem(
    "savedBooks",
    JSON.stringify(updatedSavedBooks)
  );

  localStorage.setItem(
    "finishedBooks",
    JSON.stringify(updatedFinishedBooks)
  );
};

  return (
    <div className="foryou">
      <Sidebar />

      <div className="foryou__content">
        <SearchBar />
        <h1>My Library</h1>

        <h2>Saved Books</h2>

{savedBooks.length === 0 ? (
  <div className="library__empty">
    <p>You have no saved books yet.</p>
  </div>
) : (
  <div className="books">
    {savedBooks.map((book) => (
      <div className="book" key={book.id}>
        <img src={book.imageLink} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button onClick={() => markAsFinished(book)}>
  Mark as Finished
</button>
      </div>
    ))}
  </div>
)}

<h2>Finished Books</h2>

{finishedBooks.length === 0 ? (
  <div className="library__empty">
    <p>You have no finished books yet.</p>
  </div>
) : (
  <div className="books">
    {finishedBooks.map((book) => (
      <div className="book" key={book.id}>
        <img src={book.imageLink} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    ))}
  </div>
)}

      </div>
    </div>
  );
}

export default MyLibrary;