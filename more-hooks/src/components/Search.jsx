const Search = ({searchStr, searchHandler}) => {
  return (
    <>
        <input 
            type="text" 
            placeholder="Search ..." 
            value={searchStr} 
            onChange={searchHandler}
        
        />
        <hr/>
    </>
  )
}

export default Search