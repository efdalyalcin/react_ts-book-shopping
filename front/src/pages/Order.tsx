import { useCallback, useEffect, useState } from "react";
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

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <NavBar />

      <form
        className="flex flex-col gap-3 px-4 py-3 rounded-lg w-full md:w-1/2 bg-sky-100 mx-auto mt-5"
        // onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col gap-3">
          <InputLine
            value={firstName}
            onChangeHandler={setFirstName}
            title={"First Name: "}
            labelId={"firstName"}
          />
          <InputLine
            value={lastName}
            onChangeHandler={setLastName}
            title={"Last Name:"}
            labelId={"lastName"}
          />
          <InputLine
            value={city}
            onChangeHandler={setCity}
            title={"City:"}
            labelId={"city"}
          />
          <InputLine
            value={zipCode}
            onChangeHandler={setZipCode}
            title={"Zip Code:"}
            labelId={"zipCode"}
          />
        </div>
      </form>

      <div>Total Price: {totalPrice}</div>
    </div>
  );
}
