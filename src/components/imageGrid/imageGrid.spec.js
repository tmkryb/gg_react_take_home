import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { ImageGrid } from "./imageGrid";

describe("Test images render", () => {
    it("Test if apriopriate numer of images is rendered in list", () => {

        let giphs = [
            { id: "1", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' } } },
            { id: "2", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl2' } } },
            { id: "3", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl3' } } },
            { id: "4", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl4' } } },
            { id: "5", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl5' } } },
            { id: "6", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl6' } } }
        ]
        const { getAllByText, container } = render(<ImageGrid giphs={giphs} isLoadingGifs={false} />); //giphImage, giph, tileClicked, title
        const giphsList = getAllByText((_content, element) => {
            return element.classList.contains('giph-tile-card');
        });
        expect(giphsList).toHaveLength(6);
    });
});

describe("Test modal with details show", () => {
    it("Tests if modal show on tile click", () => {

        let giphs = [
            { id: "1", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' }, original: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' } } },
            { id: "2", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl2' }, original: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' } } },
            { id: "3", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl3' }, original: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' } } },
            { id: "4", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl4' }, original: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' } } },
            { id: "5", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl5' }, original: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' } } },
            { id: "6", images: { fixed_width_downsampled: { width: '100px', height: '100px', url: 'http://testhost/testUrl6' }, original: { width: '100px', height: '100px', url: 'http://testhost/testUrl1' } } }
        ]
        const { getAllByText, queryAllByText, getByText, container } = render(<ImageGrid giphs={giphs} isLoadingGifs={false} />);
        const images = queryAllByText((_content, element) => {           
            return element.tagName.toLowerCase() === 'img';
        }); 

        fireEvent.click(images[0]);
        const modal = queryAllByText((_content, element) => {
            return element.classList.contains('modal');
        });
        expect(modal).toHaveLength(1);
    });
});