import React from 'react';

export const SearchBox = () => (
    <form className="search-form">
        <input type="text" name="Search field" placeholder="Search:" className="search-field"/>
        <input type="button" value="SEARCH" className="search-button"/>
    </form>
);
