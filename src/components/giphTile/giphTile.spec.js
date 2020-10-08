import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { GiphTile } from "./giphTile";

describe("Test tile image", () => {
    it("Tests if tile have good url", () => {

        const { getByText, getAllByText, container } = render(<GiphTile giphImage={{ width: '100px', height: '100px', url: 'http://testhost/testUrl' }} giph={{ id: "testId" }} />); //giphImage, giph, tileClicked, title
        const imgList = getAllByText((_content, element) => {

            return element.tagName.toLowerCase() === "img";
        });
        expect(imgList).toHaveLength(1);
        expect(imgList[0].src).toBe('http://testhost/testUrl');
    });
});

describe("Test hover butttons", () => {
    it("Tests if giph buttons shows and hides on mouseOver/Leave events", () => {

        const { getByText, queryAllByText, container } = render(<GiphTile giphImage={{ width: '100px', height: '100px', url: 'http://testhost/testUrl' }} giph={{ id: "testId" }} />); //giphImage, giph, tileClicked, title

        const card = getByText((_content, element) => {
            return element.classList.contains('card')
        });
        fireEvent.mouseOver(card);
        let buttons = queryAllByText((_context, element) => {
            return element.classList.contains('tile-button')
        });
        expect(buttons).toHaveLength(3);
        fireEvent.mouseLeave(card);
        buttons = queryAllByText((_context, element) => {
            return element.classList.contains('tile-button')
        });
        expect(buttons).toHaveLength(0);
    });
});