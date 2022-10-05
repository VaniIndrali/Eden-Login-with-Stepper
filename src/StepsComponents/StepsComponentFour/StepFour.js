import { React } from "react";
import "./StepFour.css";

export const StepFour = (props) => {
	const { displayName } = props;

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div id="loginFour">
			<div className="container">
				<div className="iconClass">
					<img
						src="https://i.imgur.com/gwxWVOi.jpg"
						className="circle_tick"
						alt="circletick"
					/>
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
										className="button"
										value="Launch Eden"
										id="buttonEden"
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
