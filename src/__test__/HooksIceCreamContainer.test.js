import { cleanup, render, screen, waitFor } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import React from "react";
import HooksIceCreamContainer from "../components/HooksIceCreamContainer";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
  const store = mockStore({iceCream: {
    numOfIceCreams: 20
  }
});

describe('HooksIceCreamContainer unit testing.', ()=>{
    afterEach(cleanup);

    test('Should load without crash', () => {
        render(<Provider store={store}><HooksIceCreamContainer/></Provider>);
    });

    test('should load without crash', () => {
        render(<Provider store={store}><HooksIceCreamContainer /></Provider>);
        const linkElement = screen.getByText('Number of IceCreams -');
        expect(linkElement).toBeInTheDocument();
    });

    test('Check whether the button is available', async () => {
        render(<Provider store={store}><HooksIceCreamContainer/></Provider>);
        expect(screen.getByRole('button')).toHaveTextContent(/Buy Ice Cream/i);
    });

    test('Check the cakes available', async () => {
        render(<Provider store={store}><HooksIceCreamContainer/></Provider>);
        const div = await waitFor(() => screen.findByTestId('numIcecream'));
        expect(div).toHaveTextContent('20');
    });

});