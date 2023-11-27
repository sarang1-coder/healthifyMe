import axios from "axios";
import React, { useState } from "react";

export { MetabolicRate };

function MetabolicRate() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmrResult, setBMRResult] = useState(null);

  const calculateBMR = async () => {
    const options = {
      method: "GET",
      url: "https://mega-fitness-calculator1.p.rapidapi.com/bmr",
      params: {
        weight,
        height,
        age,
        gender,
      },
      headers: {
        "X-RapidAPI-Key": "3d14d4999bmsh57d6b86c6fa9797p109968jsn5796d7f96ef9",
        "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setBMRResult(response.data.info);
      console.log(bmrResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 container ">
      <h1 className="text-center">
        <u>BMR Calculator</u>
      </h1>
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <label className="form-label">
            Weight:
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Height:
            <input
              type="number"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Age:
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Gender:
            <select
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <button className="btn btn-primary" onClick={calculateBMR}>
          Calculate BMR
        </button>
        {bmrResult && (
          <div className="mt-4">
            <h2>Your Basal Metabolic Rate (BMR) is: {bmrResult.bmr}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
