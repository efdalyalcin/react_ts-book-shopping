import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("react_ts-shopping-books/");
    }, 2000);
  }, []);

  return <div className="h-screen flex justify-center items-center">404 the page not found</div>;
}
