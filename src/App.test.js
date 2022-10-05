import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
	const component = render(<App />);

	const companyName = screen.getByText("Eden");
	const logo = screen.getByAltText("logo");
	expect(logo).toBeDefined();
	expect(companyName.textContent).toEqual("Eden");

	const step1 = screen.getByRole("button", { name: 1 });
	expect(step1.textContent).toEqual("1");

	const step2 = screen.getByRole("button", { name: 2 });
	expect(step2.textContent).toEqual("2");

	const step3 = screen.getByRole("button", { name: 3 });
	expect(step3.textContent).toEqual("3");

	const step4 = screen.getByRole("button", { name: 4 });
	expect(step4.textContent).toEqual("4");

	// step5 doest exist
	const step5 = screen.queryByRole("button", { name: 5 });
	expect(step5).toBeFalsy();

	expect(
		screen.getByRole("heading", {
			name: "Welcome! First things first...",
		})
	).toBeTruthy();

	expect(component).toMatchSnapshot();
});

test("On button clicks should render text accordingly", () => {
	const component = render(<App />);

	const submitBtn = screen.getByRole("button", {
		name: "Create Workspace",
	});
	expect(submitBtn).toBeTruthy();

	fireEvent.click(submitBtn);

	expect(
		screen.getByText("Let's set up a home for all your work")
	).toBeTruthy();

	const submitnextBtn = screen.getByRole("button", {
		name: "Create Workspace",
	});

	fireEvent.click(submitnextBtn);

	expect(screen.getByText("How are you planning to use Eden?")).toBeTruthy();

	expect(component).toMatchSnapshot();
});
