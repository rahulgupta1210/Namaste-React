
import { render,screen } from "@testing-library/react";
import Contact from "../Contact";

Test("Contact component renders", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
   // const heading = screen.getByText(/contact/i);
    expect(heading).toBeInTheDocument();
});