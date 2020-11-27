import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      name: "",
      username: "",
      email: "",
      password: "",
      university: "",
      branch: "",
      cpi: "",
      address: "",
      state: "",
      city: "",
      zip: "",
      web: "",
      os: "",
      programming: "",
      cloud: "",
      database: "",
      productivity: "",
      computer: "",
      graphical: "",
      bigdata: "",
      management: "",
      administration: "",
      goal: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      username,
      email,
      password,
      university,
      branch,
      cpi,
      address,
      state,
      city,
      zip,
      web,
      os,
      programming,
      cloud,
      database,
      productivity,
      computer,
      graphical,
      bigdata,
      management,
      administration,
      goal,
    } = this.state;

    alert(`Your registration detail: \n
           Name: ${name} \n
           Username: ${username} \n
           Email: ${email} \n
           Password: ${password} \n
           University: ${university} \n
           Branch=${branch}\n
           CPI=${cpi}\n
           Address: ${address} \n
           State: ${state} \n
           City: ${city} \n
           Zip: ${zip} \n
           web=${web}\n
           os=${os}\n
           programming=${programming}\n
           cloud=${cloud}\n
           database=${database}\n
           productivity=${productivity}\n
           computer=${computer}\n
           graphical=${graphical}\n
           bigdata=${bigdata}\n
           management=${management}\n
           administration=${administration} \n
           Goal: ${goal} \n
           `);
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            let currentStep = this.state.currentStep;
            currentStep = currentStep <= 1 ? 1 : currentStep - 1;
            this.setState({
              currentStep: currentStep,
            });
          }}
        >
          Previous
        </button>
      );
    }
    return null;
  }
  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={() => {
            let currentStep = this.state.currentStep;
            currentStep = currentStep >= 2 ? 3 : currentStep + 1;
            this.setState({
              currentStep: currentStep,
            });
          }}
        >
          Next
        </button>
      );
    }
    return null;
  }
  signButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={
            () => {
              let currentStep = this.state.currentStep;
              currentStep = currentStep >= 3 ? 4 : currentStep + 1;
              this.setState({
                currentStep: currentStep,
              });
            }
            // this.handleSubmit
          }
        >
          Submit
        </button>
      );
    }
    return null;
  }
  alertButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 4) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this.handleSubmit}
        >
          Alert
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <Head>
          <title>Wizard Form</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container-fluid">
          <div className="card-deck">
            <div className="card">
              <h1 className="card-header text-center">Wizard Form</h1>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <Step1
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    name={this.state.name}
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    university={this.state.university}
                    branch={this.state.branch}
                    cpi={this.state.cpi}
                    address={this.state.address}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                  />
                  <Step2
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    web={this.state.web}
                    os={this.state.os}
                    programming={this.state.programming}
                    cloud={this.state.cloud}
                    database={this.state.database}
                    productivity={this.state.productivity}
                    computer={this.state.computer}
                    graphical={this.state.graphical}
                    bigdata={this.state.bigdata}
                    management={this.state.management}
                    administration={this.state.administration}
                  />
                  <Step3
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    goal={this.state.goal}
                  />
                  <Step4
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    name={this.state.name}
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    university={this.state.university}
                    branch={this.state.branch}
                    cpi={this.state.cpi}
                    address={this.state.address}
                    city={this.state.city}
                    state={this.state.state}
                    zip={this.state.zip}
                    web={this.state.web}
                    os={this.state.os}
                    programming={this.state.programming}
                    cloud={this.state.cloud}
                    database={this.state.database}
                    productivity={this.state.productivity}
                    computer={this.state.computer}
                    graphical={this.state.graphical}
                    bigdata={this.state.bigdata}
                    management={this.state.management}
                    administration={this.state.administration}
                    goal={this.state.goal}
                  />
                </form>
                <div className="card-footer">
                  <div className="form-group row ">
                    <div className="form-group col">
                      {this.previousButton()}
                    </div>
                    <div className="form-group col">
                      {this.nextButton()}
                      {this.signButton()}
                      {this.alertButton()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MasterForm;
