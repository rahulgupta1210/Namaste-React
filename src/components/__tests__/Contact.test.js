
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case",()=>{

beforeAll(()=>{
    //before all testcase
})

beforeEach(()={
    // code to be executed before each test
})

afterAll(()=>{

})

afterEach(()=>{
    
})

})


it("Contact component renders", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // const heading = screen.getByText(/contact/i);
    expect(heading).toBeInTheDocument();
});

it("Contact component renders", () => {
    render(<Contact />);
    const button = screen.getByRole('button')
    // const heading = screen.getByText(/contact/i);
    expect(button).toBeInTheDocument();
});

// it("Contact component renders for input text", () => {
//     render(<Contact />);
//     const inputText = screen.getByPlaceholderText("name");
//    // const heading = screen.getByText(/contact/i);
//     expect(inputText).toBeInTheDocument();
// });