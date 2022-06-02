import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Using Connect</h2>
        <CakeContainer />
        <h2>Using Hooks</h2>
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
