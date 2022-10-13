const BASE_URL = 'http://localhost:3001/api';

export const getBooks = async () => {
  const books = await fetch(`${BASE_URL}/book`)
    .then(response => response.json())
    .then(res => res.data);

  return books;
};

export const getBook = async (id: number) => {
  const book = await fetch(`${BASE_URL}/book/${id}`)
    .then(response => response.json())
    .then(res => res.data);

  return book;
};
