import { React } from "react";
import "../StepsComponentCss/StepsCommon.css";
import "./StepTwo.css";

export const StepTwo = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit();
	};

	return (
		<div id="loginTwo">
			<div className="container">
				<h6 className="text-center subText">
					You can always create another workspace later.
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
										htmlFor="workspacename"
										className="text-left"
									>
										Workspace Name
									</label>
									<br />
									<input
										type="text"
										name="workspacename"
										id="workspacename"
										className="form-control"
										placeholder="Eden"
										required
									/>
								</div>
								<div className="form-group">
									<label
										htmlFor="workspaceurl"
										className="text-left"
									>
										Workspace URL
									</label>{" "}
									<label className="text-left text-optional">
										(optional)
									</label>
									<br />
									<div className="workspace_div">
										<input
											type="text"
											name="workspaceurl_example"
											id="workspaceurlexample"
											className="form-control"
											placeholder="www.eden.com/"
											disabled="disabled"
										/>
										<input
											type="url"
											name="workspaceurl"
											id="workspaceurl"
											className="form-control"
											placeholder="Example"
											required
										/>
									</div>
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

export default StepTwo;
