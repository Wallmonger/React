import './App.css';
import ClickSayHello from './components/hooks/ClickSayHello';
import MyContacts from './components/MyContacts';

const App = () => {
  return (
    <div className='App'>
      <h1>My Contacts</h1>
        <MyContacts />
        <ClickSayHello/>
    </div>
  )
}

export default App;