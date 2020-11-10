import {Component} from 'react'
import axios from 'axios';

import Country from '../../components/Country/Country';
import Auxiliary from '../../hoc/Auxiliary';

class Countries extends Component{
    state = {
        allSummary:[],
        isSorted:true
    }

    componentDidMount(){
        axios.get('/summary')
        .then((countries)=>{
            const filteredCountries = [...countries.data.Countries].map((country,idx)=>{
                if(idx<20){
                    return country
                }
                //we return undefined otherwise we get a warning in the browser's console
                return undefined;
            })
            .filter(country=> country!==undefined);

            this.setState({allSummary:filteredCountries});
        })
    }

    countrySelectHandler=(country)=>{
        console.log(country)
    }

    sortHandler = ()=>{
        const currState = {...this.state};
        currState.isSorted
        ?
        currState.allSummary.sort((a,b)=>{
            return a.TotalConfirmed - b.TotalConfirmed
        })
        :
        currState.allSummary.sort((a,b)=>{
            return b.TotalConfirmed - a.TotalConfirmed
        });

        currState.isSorted = !this.state.isSorted;

        this.setState(currState)
    }

    render(){        
        const countries = this.state.allSummary.map((country)=>{                        
            return <Country 
            title={country.Country} 
            key={country.CountryCode} 
            slug={country.SLug}
            newConfirmed={country.NewConfirmed}
            totalConfirmed={country.TotalConfirmed}
            countrySelect={this.countrySelectHandler}
            />         
        })
    
        return(
            <Auxiliary>
            <nav>
                <ul>                    
                {countries}
                </ul>
        <button onClick={this.sortHandler}>Sort by: {this.state.isSorted?"Аscending":"Descending"}</button>
            </nav>
            <aside>
                this is aside
            </aside>
            </Auxiliary>
        )
    }
}

export default Countries;