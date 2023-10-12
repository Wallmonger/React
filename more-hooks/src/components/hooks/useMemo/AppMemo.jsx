import { useState, useEffect, useMemo } from 'react';
import Profile from './components/useMemo/Profile';
import axios from 'axios';

function AppMemo() {

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then((response) => {
            setProfile(response.data);
        })
        .catch(error => console.log(error))
  }, [count]);

  const toggleDark = () => {
      setDark(!dark);

      if(!dark) 
        document.body.classList.add('bg-dark', 'text-white');
      else 
        document.body.classList.remove('bg-dark', 'text-white');
      
  };

  const classBtnTheme = dark ? 'btn-light' : 'btn-dark';
  const textBtnTheme = dark ? 'White mode' : 'Dark mode';

  // Memo memorizes a value and prevents the component from re-rendering unless count state changes.
  const memoizedValue = useMemo(() => {
    console.log('isOverTen function');
    return count > 10;
  }, [count]);
  
  console.log(memoizedValue);


  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>

      {memoizedValue && <div className='alert alert-danger' role="alert">Limit reached</div>}

      <button className="btn btn-info mb-3" onClick={() => setCount(count + 1)}>Increment {count}</button>

      <button className={`btn ${classBtnTheme} mb-3 float-end`} onClick={toggleDark}>{textBtnTheme}</button>

      <Profile count={count} profile={profile} />
    </div>
  );
}

export default AppMemo;