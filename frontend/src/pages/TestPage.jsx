import { useEffect, useState } from "react";
import API from "../api/auth";

function TestPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default TestPage;