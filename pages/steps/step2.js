import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
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
            placeholder="CSS, Node.js, React"
            value={props.web}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Operating Systems</label>
          <input
            className="form-control"
            name="os"
            type="text"
            placeholder="Windows, Mac OS, Linux"
            value={props.os}
            onChange={props.handleChange}
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
            placeholder="Java, JavaScript, Python"
            value={props.programming}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Cloud Computing</label>
          <input
            className="form-control"
            name="cloud"
            type="text"
            placeholder="Docker, Azure, AWS"
            value={props.cloud}
            onChange={props.handleChange}
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
            placeholder="MySQL, SQlite, MongoDB"
            value={props.database}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Productivity</label>
          <input
            className="form-control"
            name="productivity"
            type="text"
            placeholder="Slack, Trelo, Todoist"
            value={props.productivity}
            onChange={props.handleChange}
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
            placeholder="MS Office, PowerPoint, Drive"
            value={props.computer}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Graphical</label>
          <input
            className="form-control"
            name="graphical"
            type="text"
            placeholder="Figma, Sketch, Illustrator"
            value={props.graphical}
            onChange={props.handleChange}
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
            placeholder="data mining, modeling"
            value={props.bigdata}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Management</label>
          <input
            className="form-control"
            name="management"
            type="text"
            placeholder="Database, Project"
            value={props.management}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Administration</label>
          <input
            className="form-control"
            name="administration"
            type="text"
            placeholder="Research, Planning"
            value={props.administration}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
