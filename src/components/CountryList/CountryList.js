import React from 'react';
import Country from '../Country/country';
import './CountryList.css';

class CountryList extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return (
                <div className="country-list">
                    {
                        this.props.covidStatus.map((status, index) => {
                            return(
                                    <div key={index}><Country singleCountryStat = { status }/></div>
                            );
                        })
                    }
                </div>
            
        );
    }
}

export default CountryList;
 