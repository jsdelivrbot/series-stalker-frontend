import React from 'react';

export default function SearchResult({searchResult}) {

    const searchItems = searchResult.map((searchItem) =>
        <li key={searchItem}>{searchItem}</li>
    );
    return (
        <ul>{searchItems}</ul>
    );
}
