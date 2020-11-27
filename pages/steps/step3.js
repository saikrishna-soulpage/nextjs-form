import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <div className="form-row">
        <h1>Goals</h1>
      </div>
      <div className="form-group">
        <label>Goal</label>
        <input
          className="form-control"
          name="goal"
          type="text"
          placeholder="Enter goal"
          value={props.goal}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}
