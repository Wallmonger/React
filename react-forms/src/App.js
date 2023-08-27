import React from 'react';
import Welcome from './components/Welcome';
// import Form from "./Form";
// import CustomBtn from './components/customBtn';


function App() {

  const sayHello = () => alert("Bien le bonjour");

  return (
    <>
      {/* <Form head={true}/>
      <CustomBtn callback={sayHello}>salut</CustomBtn> */}
      <Welcome/>
    </>
  );
}

export default App;
