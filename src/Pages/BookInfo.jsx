import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BookInfo() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
  fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
  )
    .then((response) => response.json())
    .then((data) => {
  console.log("Book details:", data);
  setBook(data);
})
    .catch((error) => {
      console.error("Error fetching book:", error);
    });
}, [id]);
  return (
  <div className="book-info">
    <h1>Book Info</h1>

    {book ? (
      <div>
        <img
          src={book.imageLink}
          alt={book.title}
          width="200"
        />

        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.subTitle}</p>
        <p>{book.bookDescription}</p>
        <h3>Book Summary</h3>
<p>{book.summary}</p>
        <audio controls src={book.audioLink}>
  Your browser does not support audio.
</audio>
      </div>
    ) : (
      <p>Loading book...</p>
    )}
  </div>
);
}

export default BookInfo;