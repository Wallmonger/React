import './App.css';
import ClassCount from './components/useEffect/ClassCount';
import FunctionCount from './components/useEffect/FunctionCount';


function App() {
  return (
    <div className='container text-center'>
        <ClassCount />
        <hr />
        <FunctionCount />
    </div>
  );
}

export default App;
