import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/diet.css";

function Diethelp() {
  const [query, setQuery] = useState("");
  const [nutritionData, setNutritionData] = useState(null);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
      params: { query: query },
      headers: {
        "X-RapidAPI-Key": "3d14d4999bmsh57d6b86c6fa9797p109968jsn5796d7f96ef9",
        "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setNutritionData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="text-center">
        <u>Nutrition Data</u>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter food item:
          <input type="text" value={query} onChange={handleInputChange} />
        </label>
        <button className="btn btn-primary m-2" type="submit">
          Search
        </button>
      </form>

      {nutritionData && (
        <div className="mt-5">
          <h2>Nutrition Information for {query}</h2>
          <table border="1px solid wheat">
            <thead>
              <tr>
                <th>Food</th>
                <th>Calories</th>
                <th>Total Fat (g)</th>
                <th>Saturated Fat (g)</th>
                <th>Protein (g)</th>
                <th>Sodium (mg)</th>
                <th>Potassium (mg)</th>
                <th>Cholesterol (mg)</th>
                <th>Total Carbohydrates (g)</th>
                <th>Fiber (g)</th>
                <th>Sugar (g)</th>
              </tr>
            </thead>
            <tbody>
              {nutritionData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.calories}</td>
                  <td>{item.fat_total_g}</td>
                  <td>{item.fat_saturated_g}</td>
                  <td>{item.protein_g}</td>
                  <td>{item.sodium_mg}</td>
                  <td>{item.potassium_mg}</td>
                  <td>{item.cholesterol_mg}</td>
                  <td>{item.carbohydrates_total_g}</td>
                  <td>{item.fiber_g}</td>
                  <td>{item.sugar_g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export { Diethelp };
