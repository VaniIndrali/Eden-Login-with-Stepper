import { React } from "react";
import "./StepFour.css";

export const StepFour = (props) => {
	const { displayName } = props;

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div id="loginOne">
			<div className="container">
				<div className="iconClass">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						fill="#744ab7"
						class="bi bi-check-circle-fill"
						viewBox="0 0 16 16"
						id="check-circle"
					>
						<path
							id="path"
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
						/>
					</svg>
				</div>
				<h2 className="text-center displayText">
					Congratulations, {displayName}!
				</h2>
				<h6 className="text-center displaySubText">
					You have completed onboarding, you can start using the Eden!
				</h6>
				<div
					id="login-row"
					className="row justify-content-center align-items-center"
				>
					<div
						id="login-column"
						className="col-md-11"
					>
						<div
							id="login-box"
							className="col-md-12"
						>
							<form
								id="login-form"
								className="form"
								onSubmit={(e) => handleSubmit(e)}
							>
								<div className="form-group">
									<input
										type="submit"
										name="Launch Eden"
										className="btn-bd-primary"
										value="Launch Eden"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepFour;
