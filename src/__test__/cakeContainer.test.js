import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CakeContainer from '../components/cakeContainer';

const mockStore = configureMockStore();
const store = mockStore({cake: {
  numOfCakes: 10
}
});

test('changes button text on click', async () => {
  render(<Provider store={store}><CakeContainer/></Provider>);
  expect(screen.getByRole('button')).toHaveTextContent(/Buy Cake/i);
})
