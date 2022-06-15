import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CakeContainer from '../components/cakeContainer';

const mockStore = configureMockStore();
  const store = mockStore({cake: {
    numOfCakes: 10
  }
});

describe('My Connected React-Redux Component', () => {
  afterEach(cleanup);

  test('Check whether the button is available', async () => {
    render(<Provider store={store}><CakeContainer/></Provider>);
    expect(screen.getByRole('button')).toHaveTextContent(/Buy Cake/i);
  });
  
  test('Check whether the text is available', async () => {
    render(<Provider store={store}><CakeContainer/></Provider>);
    expect(screen.getByText(/Number of cakes/i)).toBeInTheDocument();
  });
  
});

