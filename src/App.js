import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countries: [],
            virusStatus: [],
            searchKey: ''
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(e){
        this.setState({searchKey: e.target.value});
    }

    async componentDidMount(){
        const countryRes = await fetch('https://api.covid19api.com/countries');
        const countries = await countryRes.json();
        this.setState({countries});

        this.state.countries.forEach(async country => {
            const statusRes = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`);
            const statusData = await statusRes.json();
            if(statusData.length){
                this.setState(prevState => (
                    {virusStatus: prevState.virusStatus.concat({...statusData[statusData.length - 1], CountryCode: country.ISO2})}
                ));
            }
        });
    }

    componentWillUnmount(){
        console.log("iner of componentWillUnmount");
    }

    render(){
        const {virusStatus, searchKey} = this.state;
        const filteredCountries = virusStatus.filter((status)=> status.Country.toLowerCase().includes(searchKey.toLowerCase()));
        return (
            <div className="App">
                <header className="App-header">
                    <div className="pb-4"><h1>Covid-19 Alert</h1></div>
                    <SearchBox searchTextHandler = { this.searchHandler }/>
                    <CountryList covidStatus = { filteredCountries }/>
                </header>
            </div>
        );
    }
    }

export default App;
