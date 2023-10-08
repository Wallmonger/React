import { useState, useEffect } from 'react';
import Profile from './components/Profile';
import axios from 'axios';

function App() {

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});

  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then((response) => {
            setProfile(response.data);
        })
        .catch(error => console.log(error))
  }, [count])

  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>

      <button className="btn btn-info mb-3" onClick={() => setCount(count + 1)}>Increment {count}</button>

      <button className="btn btn-dark mb-3 float-end">Dark Mode</button>

      <Profile count={count} profile={profile} />
    </div>
  );
}

export default App;