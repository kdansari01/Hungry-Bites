import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MealCard from "../MealCard";

export const Category = () => {
  const [filterCategory, setFilterCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
      );
      const response = await data.json();
      setFilterCategory(response.meals);
    })();
  }, [params.categoryName]);

  return (
    <div className="container-fluid px-3 mt-5">
        <h2 className="text-center text-danger mb-4">{params.categoryName}</h2>
      <div className="row">
        {filterCategory.map((mealItem) => (
          <MealCard
            name={mealItem.strMeal}
            to={`/product/${mealItem.idMeal}`}
            image={mealItem.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};
