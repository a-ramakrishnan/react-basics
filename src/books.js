import React from "react";

const Books = ({ name, author }) => {
  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hit it");
  };
  return (
    <div className="books">
      <BookImage />
      <BookName bookname={name} />
      <AuthorName author={author} />
      <button
        className="button"
        type="button"
        onClick={clickHandler}
        onMouseOver={() => console.log("Hello there")}
      >
        Just Hit It
      </button>
    </div>
  );
};

const BookName = ({ bookname }) => {
  return (
    <h1 onClick={() => console.log("Just showing off the ", bookname)}>
      {bookname}
    </h1>
  );
};

const BookImage = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18"
        alt=""
        width="300"
        height="300"
      />
    </>
  );
};

const AuthorName = ({ author }) => {
  const dataHandler = (author) => {
    alert(author);
  };
  return (
    <>
      <h4>{author}</h4>
      <button
        className="button"
        type="button"
        onClick={() => dataHandler(author)}
      >
        Author Click
      </button>
    </>
  );
};

export default Books;
