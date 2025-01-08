
import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
Test("Contact component renders", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
   // const heading = screen.getByText(/contact/i);
    expect(heading).toBeInTheDocument();
});

Test("Contact component renders", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
   // const heading = screen.getByText(/contact/i);
    expect(button).toBeInTheDocument();
});

Test("Contact component renders for input text", () => {
    render(<Contact />);
    const inputText = screen.getByPlaceholderText("name");
   // const heading = screen.getByText(/contact/i);
    expect(inputText).toBeInTheDocument();
});