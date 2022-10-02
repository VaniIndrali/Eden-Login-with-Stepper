import { React, useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { StepOne } from "./StepsComponents/StepOne.js";
import "./App.css";

function App() {
	const [stepValue, setStepValue] = useState(0);
	const [displayName, setDisplayName] = useState("");

	const connectorStyleConfigCss = {
		size: 2,
		stepSize: "1.5em",
	};

	const styleConfigCss = {
		size: "1.9em",
		activeBgColor: "#744ab7",
		inactiveBgColor: "#ffffff",
		inactiveTextColor: "#744ab7",
		completedBgColor: "#744ab7",
	};

	const getdata = (value) => {
		setDisplayName(value);
		setStepValue(1);
	};

	return (
		<div className="App">
			<div className="d-flex justify-content-center">
				<img
					src="https://i.imgur.com/CTHLh7p.jpg"
					className="App-logo"
					alt="logo"
				/>
				<h1 className="Companyname">Eden</h1>
			</div>
			<div className="row d-flex justify-content-center">
				<div className="col-4">
					<Stepper
						activeStep={stepValue}
						connectorStyleConfig={connectorStyleConfigCss}
						connectorStateColors="true"
						className="stepperClass"
					>
						<Step
							onClick={() => setStepValue(0)}
							styleConfig={styleConfigCss}
						/>
						<Step
							onClick={() => setStepValue(1)}
							styleConfig={styleConfigCss}
						/>
						<Step
							onClick={() => setStepValue(2)}
							styleConfig={styleConfigCss}
						/>
						<Step
							onClick={() => setStepValue(3)}
							styleConfig={styleConfigCss}
						/>
					</Stepper>

					{stepValue === 0 && <StepOne onSubmit={getdata} />}
					{/* below code is placeholder for next screen*/}
					{stepValue === 1 && <h1>{displayName}</h1>}
				</div>
			</div>
		</div>
	);
}

export default App;
