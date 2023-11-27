import React, { useState } from "react";
import axios from "axios";
export { BodyFat };

function BodyFat() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bfpa, setbfpa] = useState([]);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        "https://mega-fitness-calculator1.p.rapidapi.com/bfp",
        {
          params: {
            weight: weight,
            height: height,
            age: age,
            gender: gender.toLowerCase(),
          },
          headers: {
            "X-RapidAPI-Key":
              "3d14d4999bmsh57d6b86c6fa9797p109968jsn5796d7f96ef9",
            "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
          },
        }
      );

      setbfpa(response.data.info);
      console.log(bfpa);
      setError(null);
    } catch (error) {
      setError("Failed to calculate body fat percentage");
      setbfpa(null);
    }
  };

  return (
    <div className="container mt-5 bg-info">
      <h2>Body Fat Calculator</h2>
      <form onSubmit={handleFormSubmit} className="mx-auto">
        <div className="form-group">
          <label>Weight (in kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Height (in cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Calculate
        </button>
      </form>

      {bfpa && (
        <div>
          <h2>Your Body Fat Percentage is: {bfpa.bfp}%</h2>
          <h2>Your Health is: {bfpa.description}</h2>
          <h2>Your Fat Mass is: {bfpa.fat_mass}</h2>

          <table border="1px solid">
            <thead>
              <tr>
                <th>Category</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fitness</td>
                <td>Less than 18.5</td>
              </tr>
              <tr>
                <td>Athelets</td>
                <td>18.5 - 24.9</td>
              </tr>
              <tr>
                <td>Acceptable</td>
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
