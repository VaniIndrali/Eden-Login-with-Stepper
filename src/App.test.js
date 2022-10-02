import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Element", () => {
	render(<App />);
	const Element = screen.getByText("Eden");
	expect(Element).toBeInTheDocument();
});
