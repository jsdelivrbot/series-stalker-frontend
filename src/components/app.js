import React from 'react';
import SearchBar from './search_bar';
import tvMazeClient from './TvMaze';
import SearchResult from './search-result';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: []
        };
    }

    updateSearchResult(newResult) {
        let names = [];

        newResult.forEach(function (item) {
            names.push(item.show.name);
        });

        this.setState({searchResult: names})
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={(item) => tvMazeClient(item, (foo) => this.updateSearchResult(foo))}/>
                <SearchResult searchResult={this.state.searchResult}/>
            </div>
        );
    }
}
