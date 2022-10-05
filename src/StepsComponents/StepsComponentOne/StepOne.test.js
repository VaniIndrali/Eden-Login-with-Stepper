import { render, screen } from "@testing-library/react";
import StepOne from "./StepOne";

test("renders StepOne", () => {
	const props = {
		onSubmit: jest.fn(),
	};

	const component = render(<StepOne {...props} />);

	const subHeading = screen.getByRole("heading");
	expect(subHeading.textContent).toEqual("You can always change them later.");

	expect(screen.getByText("Full Name")).toBeTruthy();
	expect(screen.getByText("Display Name")).toBeTruthy();
	expect(
		screen.getByRole("textbox", {
			name: "Full Name",
		})
	).toBeTruthy();
	expect(
		screen.getByRole("textbox", {
			name: "Display Name",
		})
	).toBeTruthy();
	expect(
		screen.getByRole("button", {
			name: "Create Workspace",
		})
	).toBeTruthy();

	expect(component).toMatchSnapshot();
});
