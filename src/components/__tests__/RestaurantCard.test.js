import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantCard from "../RestaurantCard";
import {resMockData} from "../mockdata/resMockData.json";

test("test header component", () => {
  render(<RestaurantCard resData={resMockData} />);
  
  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "Login" });
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
});