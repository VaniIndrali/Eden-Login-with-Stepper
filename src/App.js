import { React, useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepOne from "./StepsComponents/StepsComponentOne/StepOne.js";
import StepTwo from "./StepsComponents/StepsComponentTwo/StepTwo.js";
import StepThree from "./StepsComponents/StepsComponentThree/StepThree.js";
import StepFour from "./StepsComponents/StepsComponentFour/StepFour.js";

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

	const performStepChange = () => {
		setStepValue(stepValue + 1);
	};

	const getdata = (value) => {
		setDisplayName(value);
		performStepChange();
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
				<div className="col-md-4">
					<Stepper
						activeStep={stepValue}
						connectorStyleConfig={connectorStyleConfigCss}
						connectorStateColors="true"
						className="stepperClass"
					>
						{/* try this - setStepValue(stepValue+1); */}
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

					{stepValue === 0 && (
						<div className="row d-flex justify-content-center col-md-12">
							<h2 className="text-center mainText">
								Welcome! First things first...
							</h2>
							<StepOne onSubmit={getdata} />
						</div>
					)}
					{stepValue === 1 && (
						<div className="row d-flex justify-content-center col-md-12">
							<h3 className="text-center workspaceText col-12">
								Let's set up a home for all your work
							</h3>
							<StepTwo onSubmit={performStepChange} />
						</div>
					)}
					{stepValue === 2 && (
						<div className="row d-flex justify-content-center col-md-12">
							<h3
								className="text-center mainText col-12"
								id="mainTextEden"
							>
								How are you planning to use Eden?
							</h3>
							<StepThree onSubmit={performStepChange} />
						</div>
					)}
					{stepValue === 3 && <StepFour displayName={displayName} />}
				</div>
			</div>
		</div>
	);
}

export default App;
