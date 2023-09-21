import './App.css';
import Menu from './components/Menu';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';

function App() {
  return (
    <div>
      <Menu />
        <Docs/>
        <Tutorials/>
        <Community/>
    </div>
  );
}

export default App;
