import { useEffect, useState } from "react";
import React from "react";
import "./category.scss";
import { Link } from "react-router-dom";
import MealCard from "../MealCard";

const Categories = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function Categories() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setApiData(data.categories);
      } catch (e) {
        alert("Something went wrong");
      }
    }
    Categories();
  }, []);
  // console.log(apiData)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="rowWrapper col-12 ">
          <div className="categoreisHeading justify-content-center d-flex mt-10 ">
            <h1 className="Heading mt-5 mb-5">Categories</h1>
          </div>
          <div className="categoreisList row">
            {apiData.map((category) => (
              <MealCard
                name={category.strCategory}
                to={`/category/${category.strCategory}`}
                image={category.strCategoryThumb}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
