import { useEffect, useState } from "react";



 export const FetchApi = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function Categories() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setApiData(data);
      } catch (e) {
        console.log(e);
      }
    }
    Categories();
  }, []);
  console.log(apiData);
};
