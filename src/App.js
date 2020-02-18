import React from 'react';
import './App.css';
import Searchbar from './Searchbar/Searcbar';
import FilterableList from './FilterableList/FilterableList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            filterOption: 'All',
        };
    };

    static defaultProps = {
        files: []
    };

    updateSearchTerm(term){
        this.setState({
            searchTerm: term
        });
    };

    updateFilterOption(option){
        this.setState({
            filterOption: option,
        });
    };

    render() {
        return (
            <div className='App'>
                <Searchbar 
                    searchTerm={this.state.searchTerm} 
                    filterOption={this.state.filterOption}
                    handleUpdate={term => this.updateSearchTerm(term)}
                    handleFilter={option => this.updateFilterOption(option)} 
                />
                <FilterableList 
                    files={this.props.files} 
                    searchTerm={this.state.searchTerm} 
                    filterOption={this.state.filterOption}
                />
            </div>
        );
    };
}

export default App;