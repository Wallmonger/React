import logo from './logo.svg';
import './App.css';
import Goku from './components/Goku';
import Vegeta from './components/Vegeta';


function App() {
  return (
    <div className='container text-center'>
      <h1>Un titre très inspiré</h1>
      <hr />

      <div className='row'>
        <Goku name="Goku"/>
        <Vegeta name="Vegeta"/>
      </div>

    </div>

  );
}

export default App;
