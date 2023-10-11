import { useRef } from 'react';
import NewInput from './components/NewInput';
import './App.css';

const App = () => {

  const date = new Date();

  const newInputRef = useRef();

  const focusInput = (val) => {
    newInputRef.current.focus(val);
    newInputRef.current.countMax();

    console.log(newInputRef.current);
  }

  return (
    <div className='App'>
      <NewInput ref={newInputRef} />
      <button onClick={() => focusInput(date.getDay())}>Focus</button>
    </div>
    
  );
}

export default App;