import React, { useState } from "react";
import axios from "axios";

export { BMICalculator };

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://mega-fitness-calculator1.p.rapidapi.com/bmi",
      params: {
        weight: weight,
        height: height,
      },
      headers: {
        "X-RapidAPI-Key": "3d14d4999bmsh57d6b86c6fa9797p109968jsn5796d7f96ef9",
        "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setBmiResult(response.data.info);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4 bg-info">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="form-group">
          <label>
            Weight (in kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Height (in cm):
            <input
              type="number"
              value={height}
              className="form-control"
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Calculate BMI
        </button>
      </form>
      {bmiResult && (
        <div>
          <h2>Your BMI is: {bmiResult.bmi}</h2>
          <h2>Your Health is: {bmiResult.health}</h2>
          <table border="1px solid">
            <thead>
              <tr>
                <th>Category</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Underweight</td>
                <td>Less than 18.5</td>
              </tr>
              <tr>
                <td>Normal Weight</td>
                <td>18.5 - 24.9</td>
              </tr>
              <tr>
                <td>Overweight</td>
                <td>25 - 29.9</td>
              </tr>
              <tr>
                <td>Obese</td>
                <td>30 or greater</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
