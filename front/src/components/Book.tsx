import React from "react";

type Props = {
  book: Book;
};

export default function Book({ book }: Props) {
  return (
    <div className="w-60 flex flex-col gap-2 p-2 rounded-lg bg-sky-200">
      <img src={book.cover_url} alt="Book cover" />
      <p className="">
        <span className="font-bold">Title: </span> {book.title}
      </p>
      <p>
        {" "}
        <span className="font-bold">Author: </span> {book.author}
      </p>
      <p>
        {" "}
        <span className="font-bold">Number of Pages: </span> {book.pages}
      </p>
    </div>
  );
}
