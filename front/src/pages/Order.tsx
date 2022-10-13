import { useCallback, useEffect, useState } from "react";
import { postOrder } from "../api/postOrder";
import InputLine from "../components/InputLine";
import NavBar from "../components/NavBar";
import { useOrderBooks } from "../context/OrderContext";

export default function Order() {
  const { booksWithQuantity } = useOrderBooks();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  const handlePrice = useCallback(() => {
    let total = 0;

    booksWithQuantity.forEach((bookWithQuantity) => {
      total += bookWithQuantity.book.price * bookWithQuantity.quantity;
    });

    setTotalPrice(total);
  }, [booksWithQuantity]);

  useEffect(() => handlePrice(), [handlePrice]);

  const handleSubmit = useCallback(() => {
    const order = booksWithQuantity.map((bookWithQuantity) => {
      return {
        id: bookWithQuantity.book.id,
        quantity: bookWithQuantity.quantity,
      };
    });

    const orderInfo: OrderInfo = {
      order,
      first_name: firstName,
      last_name: lastName,
      city: city,
      zip_code: zipCode,
    };

    postOrder(orderInfo).then((data) => console.log(data));
  }, [booksWithQuantity, city, firstName, lastName, zipCode]);

  return (
    <div className="max-w-7xl mx-auto h-screen">
      <NavBar />

      <div className="flex flex-col justify-around items-center gap-8">
        <form className="flex flex-col gap-3 px-4 py-3 rounded-lg w-full md:w-1/2 bg-sky-100 mx-auto mt-5">
          <div className="flex flex-col gap-3">
            <InputLine
              value={firstName}
              onChangeHandler={setFirstName}
              title={"First Name: "}
              labelId={"firstName"}
              placeholder={"Luke"}
            />
            <InputLine
              value={lastName}
              onChangeHandler={setLastName}
              title={"Last Name:"}
              labelId={"lastName"}
              placeholder={"Skywalker"}
            />
            <InputLine
              value={city}
              onChangeHandler={setCity}
              title={"City:"}
              labelId={"city"}
              placeholder={"Tatooine"}
            />
            <InputLine
              value={zipCode}
              onChangeHandler={setZipCode}
              title={"Zip Code:"}
              labelId={"zipCode"}
              placeholder={"62-262"}
            />
          </div>
        </form>

        <p>
          <span className="font-bold">Total Price: </span>
          {totalPrice}{" "}
          <span className="font-bold">
            {booksWithQuantity.length
              ? booksWithQuantity[0].book.currency
              : null}
          </span>
        </p>
        <button
          className="py-2 px-12 font-bold rounded-lg text-slate-100 text-center
          hover:text-slate-300 transition-colors duration-300 bg-sky-600 max-w-max"
          onClick={handleSubmit}
        >
          I Order and Pay
        </button>
      </div>
    </div>
  );
}
