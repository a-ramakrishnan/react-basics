import React from "react";
import ReactDom from "react-dom";

import "./index.css";

import Books from "./books";
import { books } from "./bookData";

// const mahaBook = { name: "Mahabharata", author: "Vyasa" };
// const ramaBook = { name: "Ramayana", author: "Valmiki" };
// const ringBook = { name: "Lord of the Rings", author: "Tolkien" };

function BookList() {
  // books.map((book) => {
  //   console.log(book.name, book.author);
  // });

  return (
    <div className="booklist">
      {/*<Books bookname={mahaBook.name} author={mahaBook.author} />*/}
      {/*<Books bookname={ramaBook.name} author={ramaBook.author} />*/}
      {/*<Books bookname={ringBook.name} author={ringBook.author} />*/}
      {/*{books.map((book) => {*/}
      {/*  return (*/}
      {/*    <Books key={book.id} bookname={book.name} author={book.author} />*/}
      {/*  );*/}
      {/*})}*/}
      {books.map((book) => {
        return <Books key={book.id} {...book} />;
      })}
    </div>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
