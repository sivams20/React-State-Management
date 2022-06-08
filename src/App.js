import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Cake section</h1>
        <h2>Using Connect</h2>
        <CakeContainer/>
        <h2>Using Hooks</h2>
        <HooksCakeContainer/>
        <h1>Ice Cream section</h1>
        <h2>Using Hooks</h2>
        <HooksIceCreamContainer/>
        <h2>With Payload</h2>
        <NewCakeContainer />
        <h2>User List</h2>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
