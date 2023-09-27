import './App.css';
import { Component } from 'react';
import MyContext from './components/context/MyContext';
import ProfileCtx from './components/context/ProfileCtx';

class App extends Component 
{
  state = {
    user: {
      name: 'Lil vador',
      age: 8
    }
  }

  render() {
    return ( 
      <MyContext.Provider value={this.state.user}>
        <ProfileCtx info={this.state.user}/>
      </MyContext.Provider>
    )
  }
}

export default App;



//#region Routes
// import './App.css';
// import { Component } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Menu from './components/Menu';
// import Docs from './components/Docs';
// import Tutorials from './components/Tutorials';
// import Community from './components/Community';
// import Profile from './components/Profile';
// import ErrorPage from './components/ErrorPage';


// // No path => does not exist
// // exact is ===
// // strict just needs to be there (/community/handle will work because /community/ is present)
// // accessible via <Link to="routename">Main</Link>

// class App extends Component 
// {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//         underConst: {
//           Docs: false,
//           Tutorials: true,
//           Community: false
//        }
//     }
//   }


//   render() {
//     return (
//     <BrowserRouter>
//       <Menu />
//       <Switch>
//         <Route exact path="/" component={Docs} />
//         <Route path="/tutorial" component={Tutorials} />
//         <Route strict path="/community/" component={Community} />
//         <Route path="/users/:profileId" component={Profile} />
//         <Route component={ErrorPage} />
//       </Switch>        
//     </BrowserRouter>
//   );
//   }
  
// }

// export default App;
//#endregion