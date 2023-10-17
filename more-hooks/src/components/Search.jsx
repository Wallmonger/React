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
        
        <p className="fw-bold text-primary">Value Of Search : <span className="fw-normal text-secondary">{searchStr}</span></p>
    </>
  )
}

export default Search