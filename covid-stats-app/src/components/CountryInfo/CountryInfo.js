import {Component} from 'react';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom';
class CountryInfo extends Component{

    render(){                
        const country = this.props.match.params.country;
        const countryStats = this.props.allSummary.filter(singleCountry=>{
            return singleCountry.Slug === country;
        });

        return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>New Confirmed Cases</th>
                                <th>New Recovered Patients</th>
                                <th>New Death Patients</th>
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
                                <th>Total Recovered Patients</th>
                                <th>Total Death Patients</th>
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
                        <tr><td><Link to={`/history/${country}`}>Full COVID-19 history of {countryStats[0].Country}</Link></td></tr>
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

export default connect(mapStateToProps)(CountryInfo);