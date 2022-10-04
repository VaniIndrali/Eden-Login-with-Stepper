import { React, useState } from "react";
import "../StepsComponentCss/StepsCommon.css";
import "./StepOne.css";

export const StepOne = (props) => {
	const [displayName, setDisplayName] = useState("");

	const handleChange = (e) => {
		setDisplayName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(displayName);
	};

	return (
		<div id="loginOne d-flex justify-content-center">
			<div className="container col-md-12 col-9">
				<h6 className="text-center subText">
					You can always change them later.
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
									<label
										htmlFor="fullname"
										className="text-left"
									>
										Full Name
									</label>
									<br />
									<input
										type="text"
										name="fullname"
										id="fullname"
										className="form-control"
										placeholder="Steve Jobs"
										required
									/>
								</div>
								<div className="form-group">
									<label
										htmlFor="displayname"
										className="text-left"
									>
										Display Name
									</label>
									<br />
									<input
										type="text"
										value={displayName}
										name="displayname"
										id="displayname"
										className="form-control"
										placeholder="Steve"
										required
										maxlength="11"
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className="form-group">
									<input
										type="submit"
										name="Create Workspace"
										className="button"
										value="Create Workspace"
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

export default StepOne;
