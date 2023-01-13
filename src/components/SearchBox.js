import React from 'react'

export default function SearchBox({ searchChange }) {
    const handleOnSearchChange = (searchData) => {
        searchChange(searchData.target.value);
    }
    return (
        <div className='pa2'>
            <input
                onChange={handleOnSearchChange}
                className="pa3 ba b--gren bg-lightest-blue"
                type="search"
                placeholder="Search robots"
            />
        </div>
    )
}
