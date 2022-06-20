import { cleanup, findByTestId, getByTestId, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CakeContainer from '../components/cakeContainer';

const mockStore = configureMockStore();
  const store = mockStore({cake: {
    numOfCakes: 10
  }
});

describe('CakeContainer Component', () => {
  afterEach(cleanup);

  test('Check whether the button is available', async () => {
    render(<Provider store={store}><CakeContainer/></Provider>);
    expect(screen.getByRole('button')).toHaveTextContent(/Buy Cake/i);
  });
  
  test('Check whether the text is available', async () => {
    render(<Provider store={store}><CakeContainer/></Provider>);
    expect(screen.getByText(/Number of cakes/i)).toBeInTheDocument();
  });

  test('Check the cakes available', async () => {
    render(<Provider store={store}><CakeContainer/></Provider>);
    // const numOfCakes = screen.getByTestId('numcakes');
    // expect(numOfCakes).toHaveTextContent('10');
    //const div = await waitFor(() => getByTestId('numCakes'));
    //const div = await screen.findByTestId('numCakes');
    const div = await waitFor(() => screen.findByTestId('numCakes'));
    expect(div).toHaveTextContent('10');
  });
  
});

