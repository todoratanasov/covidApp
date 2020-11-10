import {Component} from 'react';
import{connect} from 'react-redux';

class CountryInfo extends Component{

    render(){                
        const country = this.props.match.params.country;
        const countryStats = this.props.allSummary.filter(singleCountry=>{
            return singleCountry.Slug === country;
        });
        console.log(countryStats)
        return <h1>{country}</h1>
    }
}

const mapStateToProps = state=>{
    return{
        allSummary:state.allSummary
    }
}

export default connect(mapStateToProps)(CountryInfo);