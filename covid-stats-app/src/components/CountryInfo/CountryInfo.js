import {Component} from 'react';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actionTypes from '../../store/actions';

class CountryInfo extends Component{

    render(){                
        const country = this.props.match.params.country;
        const countryStats = this.props.allSummary.filter(singleCountry=>{
            return singleCountry.Slug === country;
        });

        return (
                <div>
                    <table>
                    <caption>{countryStats[0].Country}</caption>
                        <thead>
                            <tr>
                                <th>New Confirmed Cases</th>
                                <th>New Recovered Cases</th>
                                <th>New Death Cases</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {countryStats[0].NewConfirmed}
                            </td>
                            <td>
                                {countryStats[0].NewRecovered}
                            </td>
                            <td>
                                {countryStats[0].NewDeaths}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                        <thead>
                            <tr>
                                <th>Total Confirmed Cases</th>
                                <th>Total Recovered Cases</th>
                                <th>Total Death Cases</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {countryStats[0].TotalConfirmed}
                            </td>
                            <td>
                                {countryStats[0].TotalRecovered}
                            </td>
                            <td>
                                {countryStats[0].TotalDeaths}
                            </td>
                        </tr>
                        <tr className='navigation-row'><td colSpan='3' ><span><Link onClick={this.props.onTogle} to={`/history/${country}`}>Full COVID-19 history of {countryStats[0].Country}</Link></span></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        allSummary:state.allSummary
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onTogle:()=>dispatch({type:actionTypes.TOGLE_MODAL})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryInfo);