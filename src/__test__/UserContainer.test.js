import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk'
import UserContainer from '../components/UserContainer';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('User Container', ()=>{
    test('Should check if the data render correctly.', async()=>{
        const store = mockStore({user: {
            loading: false,
            users: [],
            error: ''
        }});
        render(<Provider store={store}><UserContainer /></Provider>);
    });

    test('Should show loading div.', async()=>{
        const store = mockStore({user: {
            loading: true,
            users: [],
            error: ''
        }});
        render(<Provider store={store}><UserContainer /></Provider>);
        const loadingDiv = await waitFor(() => screen.findByTestId('loading'));
        expect(loadingDiv).toHaveTextContent('Loading...');
    });

    test('should render MyList', () => {
        const store = mockStore({user: {
            loading: false,
            users: [{
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
              }],
            error: ''
        }});
        render(<Provider store={store}><UserContainer /></Provider>);
      });
});
