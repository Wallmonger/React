import React from 'react';
import Form from "./Form";
import './App.css';
import CustomBtn from './components/customBtn';

function App() {

  const sayHello = () => alert("Bien le bonjour");

  return (
    <div className='App'>
      <Form head={true}/>
      <CustomBtn callback={sayHello}>salut</CustomBtn>
    </div>
  );
}

export default App;
