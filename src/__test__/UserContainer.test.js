import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk'
import UserContainer from '../components/UserContainer';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
  const store = mockStore({user: {
    loading: false,
    users: [],
    error: ''
}});

describe('User Container', ()=>{
    test('Should check if the data render correctly.', async()=>{
        render(<Provider store={store}><UserContainer /></Provider>);
    });
});