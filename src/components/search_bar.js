import React, { Component } from "react";

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input
                    onChange={event => this.props.onSearch(event.target.value)}
                />
            </div>
        );
    }
}
