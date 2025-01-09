import { act } from "react-dom/test-utils"
import { fireEvent, render } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mockdata/mockResMenu.json";
import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
//import appStore from "../../"
import Headers from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import Cart from "../Cart";


global.fetch = jest.fn(()=>{
     Promise.resolve({
        json: () => Promise.resolve({MOCK_DATA: []})
    })
);


it("should load restaurant menu componnet", async()=>{

    await act( async ()=> render(
        <Provider store={appStore}>
            <Headers/>
            <RestaurantMenu/>
            <Cart/>
        </Provider>

))

    const accordianHeader = screen.getByText("Biryani (5)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByAltText("foodItems").length).toBe(5);

    const addBtns = screen.getAllByRole("button",{name: "Add +"});

    console.log(addBtns);

    fireEvent.clicke(addBtns[0]);
    screen.getByText("cart - (1 items")).toBeInthedocument();

    fireEvent.clicke(addBtns[1]);
    screen.getByText("cart - (2 items")).toBeInthedocument();

    expect(screen.getAllByAltText("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    expect(screen.getByText("Cart Is Empty").toBeInthedocument())



}) 