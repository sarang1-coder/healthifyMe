import React, { useState } from "react";
import yogaData from "./asanainfo.json";
import "../assets/styles/exercise.css";

function Excersise() {
  const [inputValue, setInputValue] = useState("");
  const [selectedPose, setSelectedPose] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const foundPose = yogaData.yoga_poses.find(
      (pose) => pose.sanskrit_name.toLowerCase() === inputValue.toLowerCase()
    );

    if (foundPose) {
      setSelectedPose(foundPose);
    } else {
      setSelectedPose(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">
        <u>Yoga Poses</u>
      </h1>
      <div className="d-flex justify-content-center mt-4 w-100">
        <input
          type="text"
          placeholder="Enter yoga pose name"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control text-center mt-2"
          style={{ maxWidth: "300px" }}
        />
        <button className="btn btn-primary mb-4" onClick={handleSearch}>
          Search
        </button>
      </div>
{selectedPose && (
  <div className="pose-details row">
    <div className="col-md-4 mt-5">
      <img
        src={selectedPose.image}
        alt={selectedPose.name}
        className="img-fluid rounded m-2"
        style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
      />
    </div>
    <div className="col-md-8 mt-3">
      <h1>{selectedPose.name}</h1>
      <p>Sanskrit Name: {selectedPose.sanskrit_name}</p>
      <table className="table">
        <tbody>
          <tr>
            <th>Problems</th>
            <td>
              <ul>
                {selectedPose.problems.map((problem, idx) => (
                  <li key={idx}>{problem}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Level</th>
            <td>{selectedPose.level}</td>
          </tr>
          <tr>
            <th>Benefits</th>
            <td>{selectedPose.benefits}</td>
          </tr>
          <tr>
            <th>Steps</th>
            <td>
              <ol>
                {selectedPose.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

    </div>
  );
}

export { Excersise };
