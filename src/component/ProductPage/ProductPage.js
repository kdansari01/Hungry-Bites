import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player";

const ProductPage = () => {
  const [meal, setMeal] = useState({});
  const params = useParams();

  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productId}`
      );
      const response = await data.json();
      const meal = (response && response.meals[0]) || {};
      if (meal) {
        const listOfIngredeint = Object.keys(meal)
          .filter((key) => key.includes("strIngredient"))
          .map((ingKey) => {
            const [, id] = ingKey.split("strIngredient");
            const key = meal[ingKey];
            if (key) {
              return {
                meal: {
                  name: key,
                  measure: meal[`strMeasure${id}`],
                },
              };
            }
          })
          .filter(Boolean);
        Object.assign(meal, { listOfIngredeint });
      }
      setMeal(meal);
      console.log(meal);
    })();
  }, [params.productId]);

  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12 my-5 ">
            <img src={meal.strMealThumb} alt="ingredient" className="col-12" />

            <h2 className="text-center mt-3">{meal.strMeal}</h2>
          </div>
          <div className="col-lg-7 col-md-12 col-12 mt-5">
            <h2 className="text-center text-bg-primary">Recipe</h2>
            <table className="col-6 table ">
              <thead>
                <tr className="text-strong table-active">
                  <td className="text-danger">Ingredient</td>

                  <td className="text-danger ">Qnt</td>
                </tr>
              </thead>
              <tbody>
                {meal.listOfIngredeint &&
                  meal.listOfIngredeint.map((list) => (
                    <tr key={list.meal.name}>
                      <td>{list.meal.name}</td>
                      <td>{list.meal.measure}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12 border">
            <h2 className="text-center">Instructions</h2>
            <p className="container">{meal.strInstructions}</p>
  
            {/* <div className="row">
              <div className="col-lg-12 col-md-12 col-12 d-flex border mb-4 ">
              <div className="col-6" >
                <ReactPlayer url={meal.strYoutube} />
                </div>

                <div className="col-6" >
                <h2 className="">Wacth this.....</h2>
                </div>

            </div>
            </div> */}
            </div>

          </div>
        </div>
    </div>
  );
};

export default ProductPage;
