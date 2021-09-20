
import './App.css';
import SimpleModel from './task1/simpleModal'
import Parent from './task2/parent';
import InputNumber from './task3/inputNumber/inputNumber';
import {useState} from 'react'
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>show Modal</button>
      {show && <SimpleModel show={show} onClose={() => setShow(false)} />}
      <Parent />
      <InputNumber />
    </div>
  );
}

export default App;
