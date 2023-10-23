import './App.css';
import { fakeUsersGenerator } from './data/users';
import { useState, useEffect } from 'react';
import TableUsers from './components/TableUsers';
import Search from './components/Search'; 


const users = fakeUsersGenerator();

const App = () => {

  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  // const [isPending, startTransition] = useTransition();
    
  // CustomHook
  /* const {data, isLoading} = useFetch('https://jsonplaceholder.typicode.com/users') */
  
  const filteredUsers = () => {
        
    const foundUsers = users.filter((user) => {
      return Object.values(user)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
            
      setResultSearch(foundUsers);
    }

    useEffect(() => {
        if (search !== '') {
          filteredUsers();

          // startTransition(() => {  // The code will be executed in the background, and the UI render will not be blocked, set isPending to true
          //   filteredUsers(); 
          // })
        }
        else {
          setResultSearch([]);
        }
        
    }, [search]);
    

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const msgDisplay = (msg, color) => {
        return (
            <p style={{textAlign: 'center', color: color}}>{msg}</p>
        )
    }
    

  return (
    <div className='App'>
      <h1>Contacts</h1>
      <p>Total: {users.length} members</p>

      <Search
          searchStr={search} 
          searchHandler={handleChange}
      /> 
          

      {
        search === '' ? null
        :
        <TableUsers 
            dataArray={resultSearch} 
        />
      }
           
        
    </div>
    )
}

export default App;