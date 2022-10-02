import { React, useState } from "react";
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
		<div id="login">
			<div className="container">
				<h2 className="text-center mainText">
					Welcome! First things first...
				</h2>
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
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className="form-group">
									<input
										type="submit"
										name="Create Workspace"
										className="btn-bd-primary"
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
