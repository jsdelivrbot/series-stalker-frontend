import React from 'react';

function SearchResult({searchResult}) {

    const searchItems = searchResult.map((searchItem) =>
        <li key={searchItem}>{searchItem}</li>
    );
    return (
        <ul>{searchItems}</ul>
    );
}

export default SearchResult;
