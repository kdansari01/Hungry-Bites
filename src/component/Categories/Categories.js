import { useEffect, useState } from "react";
import React from "react";

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
          {/* <div className="categoreisBody d-flex"> */}
            {/* <div className="categoriesBodyWrapper  col-4"> */}
              <div className="categoreisList row">
                {apiData.map((category) => (
                 <div className="categoreisBody d-flex col-3 mb-4"> 
                  <div className="categoriesBodyWrapper ">
                    <div className="card" key={category.idCategory}>
                      <img
                        src={category.strCategoryThumb}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{category.strCategory}</h5>
                        {/* <p className="card-text">
                          {category.strCategoryDescription}
                        </p> */}
                        {/* <a href="/" className="btn btn-primary">
                          Dishes
                        </a> */}
                      </div>
                    </div>
                  </div>
                  </div>

                ))}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
