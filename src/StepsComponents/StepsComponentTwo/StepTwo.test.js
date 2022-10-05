import { render, screen } from "@testing-library/react";
import StepTwo from "./StepTwo";

test("renders StepTwo", () => {
	const props = {
		onSubmit: jest.fn(),
	};

	const component = render(<StepTwo {...props} />);

	const subHeading = screen.getByRole("heading");
	expect(subHeading.textContent).toEqual(
		"You can always create another workspace later."
	);

	expect(screen.getByText("Workspace Name")).toBeTruthy();
	expect(screen.getByText("Workspace URL")).toBeTruthy();
	expect(screen.getByText("(optional)")).toBeTruthy();
	expect(
		screen.getByRole("textbox", {
			name: "Workspace Name",
		})
	).toBeTruthy();
	expect(screen.getByPlaceholderText("www.eden.com/")).toBeTruthy();
	expect(
		screen.getByRole("textbox", {
			name: "Workspace URL",
		})
	).toBeTruthy();
	expect(
		screen.getByRole("button", {
			name: "Create Workspace",
		})
	).toBeTruthy();

	expect(component).toMatchSnapshot();
});
