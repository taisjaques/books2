import React, { useState, useEffect } from "react"
import "./App.css"
import getBooks from "./service"

const App = () => {
  // [state, stateUpdater] === [value, methodToSetValue]
  let [books, setBooks] = useState([])

  // after finish mounting the component 
  useEffect(async () => {
    const { items } = await getBooks()
    setBooks(items)
  }, [])

  const save = () => {
    
  }

  return (
    <div>
      {books && books.map(book => (
        <div key={book.id}>{book.id}</div>
      ))}
    </div>
  );
};

export default App;
