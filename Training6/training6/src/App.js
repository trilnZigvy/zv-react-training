
import './App.css';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
// import store from "./redux/store/store";
import { store, persistor } from "./redux-saga/store";
import RedirectButton from "./components/redirectButton/redirectButton";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RedirectButton />
      </PersistGate>
    </Provider>
  );
}

export default App;
