import './App.css';
import MyContacts from './components/MyContacts';

const App = () => {
  return (
    <div className='App'>
      <h1>My contacts</h1>
      <MyContacts />
    </div>
  )
}

export default App;












//#region Newsletter (useId)
// import './App.css';
// import Newsletter from './components/Newsletter';
// import Articles from './components/Articles';
// import NameFields from './components/NameFields';


// const App = () => {
//   return (
//     <div className='App'> 
//         Newsletter
//         <Newsletter />
//         <form>
//           <NameFields />
//         </form>

//         <Articles/>
//         <Articles/>
//         <Articles/>
//         <Articles/>
//         <Newsletter/>
//     </div>
//   )
// }


// export default App;

//#endregion
//#region TableUsers
// import './App.css';
// import { fakeUsersGenerator } from './data/users';
// import { useState, useEffect } from 'react';
// import TableUsers from './components/TableUsers';
// import Search from './components/Search'; 


// const users = fakeUsersGenerator();

// const App = () => {

//   const [search, setSearch] = useState('');
//   const [resultSearch, setResultSearch] = useState([]);

//   // const [isPending, startTransition] = useTransition();
    
//   // CustomHook
//   /* const {data, isLoading} = useFetch('https://jsonplaceholder.typicode.com/users') */
  
//   const filteredUsers = () => {
        
//     const foundUsers = users.filter((user) => {
//       return Object.values(user)
//           .join(' ')
//           .toLowerCase()
//           .includes(search.toLowerCase());
//       });
            
//       setResultSearch(foundUsers);
//     }

//     useEffect(() => {
//         if (search !== '') {
//           filteredUsers();

//           // startTransition(() => {  // The code will be executed in the background, and the UI render will not be blocked, set isPending to true
//           //   filteredUsers(); 
//           // })
//         }
//         else {
//           setResultSearch([]);
//         }
        
//     }, [search]);
    

//     const handleChange = e => {
//         setSearch(e.target.value);
//     }

//     const msgDisplay = (msg, color) => {
//         return (
//             <p style={{textAlign: 'center', color: color}}>{msg}</p>
//         )
//     }
    

//   return (
//     <div className='App'>
//       <h1>Contacts</h1>
//       <p>Total: {users.length} members</p>

//       <Search
//           searchStr={search} 
//           searchHandler={handleChange}
//       /> 
          

//       {
//         search === '' ? null
//         :
//         <TableUsers 
//             dataArray={resultSearch} 
//         />
//       }
           
        
//     </div>
//     )
// }

// export default App;
//#endregion