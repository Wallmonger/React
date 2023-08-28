import React from 'react';

import Form from "./Form";
import {Button} from 'react-bootstrap';


function App() {

  const sayHello = () => alert("Bien le bonjour");

  return (
    <>
      <Form head={true}/>
      <div className='text-center'>
        <Button onClick={sayHello} variant="secondary" size="lg">Alert</Button>
      </div>
 
    </>
  );
}

export default App;
