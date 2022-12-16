import React from 'react'

const SearchForm = ({query, setQueryChar}) => {
    const handleChange = (e) => {
        setQueryChar(e.target.value.toLowerCase())
    }

    return (
        <div className="Search">
            <input 
                value={query}
                onChange={handleChange}
                className="search-input"
                placeholder='Search by name'
            />
        </div>
  )
}

export default SearchForm