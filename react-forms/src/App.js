import React from 'react';
import Welcome from './components/Welcome';
import Template from './components/Template';
// import Form from "./Form";
// import CustomBtn from './components/customBtn';


function App() {

  const sayHello = () => alert("Bien le bonjour");

  return (
    <>
      {/* <Form head={true}/>
      <CustomBtn callback={sayHello}>salut</CustomBtn> */}
      <Template/>
      <Welcome />
    </>
  );
}

export default App;
