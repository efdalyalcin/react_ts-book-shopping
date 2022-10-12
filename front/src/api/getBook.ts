const BASE_URL = 'http://localhost:3001/api';

export const getBooks = async (id: number) => {
  const book = await fetch(`${BASE_URL}/book/${id}`)
    .then(response => response.json())
    .then(res => res.data);

  return book;
};
