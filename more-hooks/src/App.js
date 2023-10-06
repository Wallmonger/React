import { useState, useCallback } from 'react';
import Count from './components/Count';
import Button from './components/Button';
import './App.css';


function App () {

  const [countOne, setCountOne] = useState({ value: 0, btnColor: 'success', increment: 25});
  const [countTwo, setCountTwo] = useState({ value: 0, btnColor: 'danger', increment: 15});

  // useCallback (callback, changing state)
  // If countOne has been changed, re-rendering the function. Else the function will remains the same

  const incrementCountOne = useCallback((val) => {
      console.log('%c IncrementCountOneFunction loaded', 'color: green')
      countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val} );
  }, [countOne]);



  const incrementCountTwo = useCallback((val) => {
    console.log('%c IncrementCountTwoFunction loaded', 'color: red');
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val} )
  }, [countTwo]);



  return (
    <div className='container'>
      <Count text="CountOne" count={countOne.value} bgColor={countOne.btnColor} />
      <Count text="CountTwo" count={countTwo.value} bgColor={countTwo.btnColor} />

      <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
      <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
    </div>
  )
}

export default App;
