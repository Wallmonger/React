import { Component } from 'react';
import Profile from './components/useContext/Profile';
import './App.css';
import { UserContext, ColorContext } from './components/useContext/MyContexts';


class App extends Component 
{

  state = {
    user: {
      name: 'baki',
      age : 25
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
          <ColorContext.Provider value="red">
            <Profile />
          </ColorContext.Provider>
      </UserContext.Provider>
    );
  }
  
}

export default App;
