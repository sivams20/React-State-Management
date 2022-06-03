import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';


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
      </div>
    </Provider>
  );
}

export default App;
