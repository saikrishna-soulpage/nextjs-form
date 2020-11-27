import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

export default function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <div className="form-row">
        <h1>Details</h1>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Enter name"
            value={props.name}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Username</label>
          <input
            className="form-control"
            name="username"
            type="text"
            placeholder="Enter username"
            value={props.username}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Enter password"
            value={props.password}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>University</label>
          <input
            className="form-control"
            name="university"
            type="text"
            placeholder="University"
            value={props.university}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Branch</label>
          <input
            className="form-control"
            name="branch"
            type="text"
            placeholder="Eg : ECE"
            value={props.branch}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label>CPI</label>
          <input
            className="form-control"
            name="cpi"
            type="text"
            placeholder="CPI"
            value={props.cpi}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          className="form-control"
          name="address"
          type="text"
          placeholder="Enter address"
          value={props.address}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>State</label>
          <input
            className="form-control"
            name="state"
            type="text"
            placeholder="Enter state"
            value={props.state}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label>City</label>
          <input
            className="form-control"
            name="city"
            type="text"
            placeholder="Enter city"
            value={props.city}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Zip</label>
          <input
            className="form-control"
            name="zip"
            type="text"
            placeholder="Enter zip"
            value={props.zip}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
