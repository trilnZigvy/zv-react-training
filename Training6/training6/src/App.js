
import './App.css';
import { Provider } from "react-redux";
// import store from "./redux/store/store";
import store from './redux-saga/store';
import RedirectButton from "./components/redirectButton/redirectButton";

function App() {
  return (
    <Provider store={store}>
      <RedirectButton />
    </Provider>
  );
}

export default App;
