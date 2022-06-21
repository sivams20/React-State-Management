import { cleanup, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import HooksCakeContainer from "../components/HooksCakeContainer";

const mockStore = configureMockStore();
  const store = mockStore({cake: {
    numOfCakes: 10
  }
});

describe('HooksCakeContainer unit testing',()=>{
    afterEach(cleanup);

    test('Should load without crash', () => {
        render(<Provider store={store}><HooksCakeContainer/></Provider>);
    });

    test('should load without crash', () => {
        render(<Provider store={store}><HooksCakeContainer /></Provider>);
        const linkElement = screen.getByText('Num of Cakes -');
        expect(linkElement).toBeInTheDocument();
    });

    test('Check whether the button is available', async () => {
        render(<Provider store={store}><HooksCakeContainer/></Provider>);
        expect(screen.getByRole('button')).toHaveTextContent(/Buy Cake/i);
    });

    test('Check the cakes available', async () => {
        render(<Provider store={store}><HooksCakeContainer/></Provider>);
        const div = await waitFor(() => screen.findByTestId('numCakes'));
        expect(div).toHaveTextContent('10');
    });

});