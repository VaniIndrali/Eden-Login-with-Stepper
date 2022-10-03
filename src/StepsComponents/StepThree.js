import { React } from "react";
import "./StepThree.css";

export const StepThree = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit();
	};

	const addFocusCss = () => {
		var icon = document.getElementById("svgPerson");
		icon.classList.add("focused");
	};

	const addBlurCss = () => {
		var icon = document.getElementById("svgPerson");
		icon.classList.remove("focused");
	};

	return (
		<div id="loginThree">
			<div className="container">
				<h6 className="text-center subText">
					We'll streamline your setup experience accordingly.
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
									<div class="btn-group">
										<button
											id="btn_myself"
											type="button"
											onFocus={() => addFocusCss()}
											onBlur={() => addBlurCss()}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="27"
												height="27"
												fill="currentColor"
												class="bi bi-person-fill"
												viewBox="0 0 16 14"
												id="svgPerson"
											>
												<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
											</svg>
											<h5 className="mt-2">For myself</h5>
											<h6>
												Write better. Think more
												clearly. Stay organized.
											</h6>
										</button>
										<button
											id="btn_team"
											type="button"
										>
											<img
												src="https://i.imgur.com/op4AsSO.png"
												className="team-logo"
												alt="team"
											/>
											<h5 className="mt-3">
												With my team
											</h5>
											<h6>
												Wikis, docs, tasks & projects,
												all in one place.
											</h6>
										</button>
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

export default StepThree;
