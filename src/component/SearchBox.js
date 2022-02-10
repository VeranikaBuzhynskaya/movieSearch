import React, { useState } from 'react';

export const SearchBox = ({onFilter}) => {
    const [searchText, setSearchText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter(searchText);

        // reset search field
        setSearchText("");
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="Search field"
                placeholder="Search:"
                className="search-field"
                value={searchText}
                onChange={e => setSearchText(e.target.value) }
             />
            <input type="submit" value="SEARCH" className="search-button"/>
        </form>
    );
};
