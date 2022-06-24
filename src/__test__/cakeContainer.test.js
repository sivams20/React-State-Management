import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CakeContainer from '../components/cakeContainer';
import { buyCake } from '../redux';

const mockStore = configureMockStore();
  const store = mockStore({cake: {
    numOfCakes: 10
  }
});

describe('CakeContainer Component', () => {

  beforeEach(()=>{
    store.dispatch = jest.fn();
  });
  afterEach(cleanup);

  test('should load without crash', () => {
    render(<Provider store={store}><CakeContainer/></Provider>);
  });

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
    const div = await waitFor(() => screen.findByTestId('numCakes'));
    expect(div).toHaveTextContent('10');
  });

  test('Should dispatch action on button click', async () => {
    render(<Provider store={store}><CakeContainer/></Provider>);
    const buyButton = await waitFor(() => screen.findByTestId('buyCake'));
    expect(buyButton).toHaveTextContent('Buy Cake');
    await fireEvent.click(buyButton);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(buyCake());
  });
  
});
