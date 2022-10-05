import { render, screen } from "@testing-library/react";
import StepThree from "./StepThree";

test("renders StepThree", () => {
	const props = {
		onSubmit: jest.fn(),
	};

	const component = render(<StepThree {...props} />);

	expect(
		screen.getByRole("heading", {
			name: "We'll streamline your setup experience accordingly.",
		})
	).toBeTruthy();

	expect(
		screen.getByRole("button", {
			name: "For myself Write better. Think more clearly. Stay organized.",
		})
	).toBeTruthy();
	expect(
		screen.getByRole("button", {
			name: "team With my team Wikis, docs, tasks & projects, all in one place.",
		})
	).toBeTruthy();
	expect(
		screen.getByRole("button", {
			name: "Create Workspace",
		})
	).toBeTruthy();

	expect(component).toMatchSnapshot();
});
