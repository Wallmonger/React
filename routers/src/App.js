import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import ErrorPage from './components/ErrorPage';


// No path => does not exist
// exact is ===
// strict just needs to be there (/community/handle will work because /community/ is present)
// accessible via <Link to="routename">Main</Link>

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Docs} />
        <Route path="/tutorial" component={Tutorials} />
        <Route strict path="/community/" component={Community} />
        <Route component={ErrorPage} />
      </Switch>        
    </BrowserRouter>
  );
}

export default App;
