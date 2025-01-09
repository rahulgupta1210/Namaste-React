
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import mockRestListData from "../mockdata/mockRestListData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data)
        }
    })

});

it("should render the body comonent with search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>

        ));

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target :{value:"burger"}});
    fireEvent.click(searchBtn);
    console.log(searchBtn);
    const cards = screen.getAllByTestId("resCard");

    expect(searchBtn).toBeInTheDocument();
    expect(cards.length).toBe(6);



})

it("should filter the body comonent with search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>

        ));

    const cardsBeforesearch = screen.getAllByTestId("resCard")
    expect(cardsBeforesearch.length).toBe(7);


    const topratedbtn = screen.getByRole("button",{name:"Top rated restaurat"});
    fireEvent.click(topratedbtn);
    console.log(searchBtn);
    const cardsAftersearch = screen.getAllByTestId("resCard")
    expect(cardsAftersearch.length).toBe(6);



})