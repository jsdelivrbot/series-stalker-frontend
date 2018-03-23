import React, {Component} from 'react';
import SearchBar from './search_bar';
import tvMazeClient, {filter} from './TvMaze';
import SearchResult from'./search-result';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            searchResult: ['test', 'bla']
        };
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={(item) => tvMazeClient(item)}/>
                <SearchResult searchResult={this.state.searchResult}/>
            </div>
        );
    }
}


