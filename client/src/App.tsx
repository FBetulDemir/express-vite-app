import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [array, setArray] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <h1>List of my favorite fruits</h1>

      {array.map((fruit, index) => (
        <ul key={index}>
          <li>{capitalizeFirstLetter(fruit)}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
