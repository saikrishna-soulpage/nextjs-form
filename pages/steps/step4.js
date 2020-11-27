import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

export default function Step4(props) {
  if (props.currentStep !== 4) {
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
            value={props.name}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Username</label>
          <input
            className="form-control"
            name="username"
            type="text"
            value={props.username}
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
            value={props.email}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={props.password}
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
            value={props.university}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Branch</label>
          <input
            className="form-control"
            name="branch"
            type="text"
            value={props.branch}
          />
        </div>
        <div className="form-group col-md-4">
          <label>CPI</label>
          <input
            className="form-control"
            name="cpi"
            type="text"
            value={props.cpi}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          className="form-control"
          name="address"
          type="text"
          value={props.address}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>State</label>
          <input
            className="form-control"
            name="state"
            type="text"
            value={props.state}
          />
        </div>
        <div className="form-group col-md-4">
          <label>City</label>
          <input
            className="form-control"
            name="city"
            type="text"
            value={props.city}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Zip</label>
          <input
            className="form-control"
            name="zip"
            type="text"
            value={props.zip}
          />
        </div>
      </div>
      <div className="form-row">
        <h1>Skills</h1>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Web</label>
          <input
            className="form-control"
            name="web"
            type="text"
            value={props.web}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Operating Systems</label>
          <input
            className="form-control"
            name="os"
            type="text"
            value={props.os}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Programming</label>
          <input
            className="form-control"
            name="programming"
            type="text"
            value={props.programming}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Cloud Computing</label>
          <input
            className="form-control"
            name="cloud"
            type="text"
            value={props.cloud}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Database</label>
          <input
            className="form-control"
            name="database"
            type="text"
            value={props.database}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Productivity</label>
          <input
            className="form-control"
            name="productivity"
            type="text"
            value={props.productivity}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Computer Skills</label>
          <input
            className="form-control"
            name="computer"
            type="text"
            value={props.computer}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Graphical</label>
          <input
            className="form-control"
            name="graphical"
            type="text"
            value={props.graphical}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Big Data</label>
          <input
            className="form-control"
            name="bigdata"
            type="text"
            value={props.bigdata}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Management</label>
          <input
            className="form-control"
            name="management"
            type="text"
            value={props.management}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Administration</label>
          <input
            className="form-control"
            name="administration"
            type="text"
            value={props.administration}
          />
        </div>
      </div>
      <div className="form-row">
        <h1>Goals</h1>
      </div>
      <div className="form-group">
        <label>Goal</label>
        <input
          className="form-control"
          name="goal"
          type="text"
          value={props.goal}
        />
      </div>
    </div>
  );
}
