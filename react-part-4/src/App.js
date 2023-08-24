import React, { useState } from 'react';

// Child component
function Book(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">Author: {props.author}</p>
        <p className="card-text">Pages: {props.pages}</p>
        <button className="btn btn-danger" onClick={props.onRemove}>Remove</button>
      </div>
    </div>
  );
}

// Parent component
function App() {
  const [books, setBooks] = useState([
    { title: "The sample book one", author: "Kaushalya Senarathna", pages: 234 },
    { title: "The sample book two", author: "Tamara Senarathna", pages: 281 },
    { title: "The sample book three", author: "kalani senarathna", pages: 328 },
    { title: "The sample book four", author: "roshima senarathna", pages: 432 }
  ]);

  const removeBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Book Collection</h1>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            pages={book.pages}
            onRemove={() => removeBook(index)}
          />
        ))
      )}
    </div>
  );
}

export default App;
