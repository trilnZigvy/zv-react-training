// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
// import Todo from './task1/todo';
import store from "./redux/store/store";
import RedirectButton from './component/redirectButton/redirectButton';
function App() {
  return (
    // <Todo/>
    <Provider store={store}>
      <RedirectButton />
    </Provider>
  );
}

export default App;
