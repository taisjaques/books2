import React, { useState, useEffect } from "react";
import "./App.css";
import getBooks from "./service";

const App = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(response => {
      setBooks(response);
    });
  }, []);

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>{book.id}</div>
      ))}
    </div>
  );
};

export default App;
