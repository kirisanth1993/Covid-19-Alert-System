import React from 'react';
import './Country.css';

class Country extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <div className="Country-block">
                <img className="country-flag" src={`https://www.countryflags.io/${this.props.singleCountryStat.CountryCode}/shiny/64.png`}/>
                <h3 className="text-center country-heading">{this.props.singleCountryStat.Country}</h3>
                <div className="row text-left information-text">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">Active</div>
                            <div className="col-md-4 text-right">{this.props.singleCountryStat.Active}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">Confirmed</div>
                            <div className="col-md-4 text-right">{this.props.singleCountryStat.Confirmed}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="row">
                            <div className="col-md-6">Death</div>
                            <div className="col-md-4 text-right">{this.props.singleCountryStat.Deaths}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">Recovered</div>
                            <div className="col-md-4 text-right">{this.props.singleCountryStat.Recovered}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Country;