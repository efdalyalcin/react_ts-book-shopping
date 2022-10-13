const BASE_URL = 'http://localhost:3001/api/order';

export const postOrder = async (orderInfo: OrderInfo) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderInfo),
  })

  const data = await response.json();

  return data;
};