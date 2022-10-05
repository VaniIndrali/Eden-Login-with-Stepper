import { render, screen } from "@testing-library/react";
import StepFour from "./StepFour";

test("renders StepFour", () => {
	const props = {
		displayName: "Joseph",
		onSubmit: jest.fn(),
	};

	const component = render(<StepFour {...props} />);

	expect(
		screen.getByRole("heading", {
			name: "Congratulations, Joseph!",
		})
	).toBeTruthy();

	expect(
		screen.getByRole("heading", {
			name: "You have completed onboarding, you can start using the Eden!",
		})
	).toBeTruthy();

	expect(
		screen.getByRole("button", {
			name: "Launch Eden",
		})
	).toBeTruthy();

	expect(component).toMatchSnapshot();
});
