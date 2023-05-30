import React from "react";
import { connect } from "react-redux";
import { addStep, resetSteps } from "./actions";

function StepCounter({ stepCount, addStep, resetSteps }) {
  return (
    <div>
      <h1>Step Count: {stepCount}</h1>
      <button onClick={addStep}>Add Step</button>
      <button onClick={resetSteps}>Reset Steps</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    stepCount: state.stepCount
  };
}

const mapDispatchToProps = {
  addStep,
  resetSteps
};

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);
