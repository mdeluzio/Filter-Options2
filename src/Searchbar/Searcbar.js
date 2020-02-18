import React from 'react';
import './Searchbar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';


class Searchbar extends React.Component {

    render() {
        return (
            <div className='Searchbar'>
                <div className="Searchbar__heading">
                    <h1>File Uploader</h1>
                </div>
                <div className="Searchbar__controls">
                    <SearchBox searchTerm={this.props.searchTerm} handleUpdate={this.props.handleUpdate} />
                    <FilterOptions filterOption={this.props.filterOption} handleFilterUpdate={this.props.handleFilterUpdate} />
                </div>
            </div>
        );
    };
}

export default Searchbar;