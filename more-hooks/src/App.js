import { useRef } from 'react';
import NewInput from './components/NewInput';
import './App.css';

const App = () => {

  const newInputRef = useRef();

  const focusInput = () => {
    newInputRef.current.focus();
  }

  return (
    <div className='App'>
      <NewInput name="newer" ref={newInputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
    
  );
}

export default App;