import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = e => {
        this.setState({ term: e.target.value });
        this.props.videoSearch(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder="Search"
                />
            </div>
        );
    }
}

export default SearchBar;