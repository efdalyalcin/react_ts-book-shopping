import React, { useCallback, useState } from "react";

type Props = {
  firstName: boolean;
  lastName: boolean;
  city: boolean;
  zipCode: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Popup({
  firstName,
  lastName,
  city,
  zipCode,
  setIsPopupOpen,
}: Props) {
  const [errors] = useState({
    nameError: "Your name must contain at least 4 letters",
    lastNameError: "Your last name must contain at least 5 letters",
    cityError: "City is required",
    zipCodeError: "Zip code must be in the format of '11-111'",
  });

  const handleErrors = useCallback(() => {
    if (!firstName) return errors.nameError;

    if (!lastName) return errors.lastNameError;

    if (!city) return errors.cityError;

    if (!zipCode) return errors.zipCodeError;
  }, [city, firstName, lastName, zipCode]);

  return (
    <div
      className="relative right-0 self-end flex flex-col md:right-4 mx-auto
        md:mx-0 items-end bg-red-100 p-2 rounded-lg min-w-360"
    >
      <button
        className="px-2 py-1 bg-red-300 rounded-lg"
        onClick={() => setIsPopupOpen(false)}
      >
        x
      </button>
      <p className="self-center">{handleErrors()}</p>
    </div>
  );
}
