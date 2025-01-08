

import { fireEvent, render } from "@testing-library/react";
import { res } from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import RestaurantCard from "../RestaurantCard";
import resMockData from "./resMockData.json";

It("test header component", () => {

    render(
       <RestaurantCard resData={resMockData} />

       const name = screen.getByText("McDonald's");
       expect(name).toBeInTheDocument();


    )

    const button = screen.getByRole("button",{name:"Login"});
    fireEvent.click(button)
    expect(button).toBeInTheDocument();

})