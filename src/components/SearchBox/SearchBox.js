import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type="text" className="form-control input-section" onInput={this.props.searchTextHandler} placeholder="Search Country .."/>
            </div>
        );
    }
}

export default SearchBox;

