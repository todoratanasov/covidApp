import {Component} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import{connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import Country from '../../components/Country/Country';
import CountryInfo from '../../components/CountryInfo/CountryInfo';
import Modal from '../../UI/Modal/Modal';
import Auxiliary from '../../hoc/Auxiliary';
import Spinner from '../../UI/Spinner/Spinner'

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

            this.props.onSetAllSummary(filteredCountries);
            this.props.onLoading();
        })
    }

    sortHandler = ()=>{        
        this.props.isSorted
        ?
        this.props.allSummary.sort((a,b)=>{
            return a.TotalConfirmed - b.TotalConfirmed
        })
        :
        this.props.allSummary.sort((a,b)=>{
            return b.TotalConfirmed - a.TotalConfirmed
        });

        this.props.onSort()
    }

    render(){       
        const countries = this.props.allSummary.map(country=>{                        
            return <Country 
            title={country.Country} 
            key={country.CountryCode} 
            slug={country.Slug}
            totalConfirmed={country.TotalConfirmed}
            />         
        });
    
        return(
            this.props.showSpinnerCountries
            ?
            <Spinner/>
            :
            <Auxiliary>  
                
                    <section>
                    <nav>
                        <div><button className='sort-button' onClick={this.sortHandler}>Sort by: {this.props.isSorted?"Descending":"Аscending"}</button></div>
                    
                        <ul>                    
                            {countries}
                        </ul>
                        
                    </nav>
                </section>
                <aside>
                <Switch>
                    <Route path="/detailed/:country" exact component={CountryInfo}/>
                    {
                    this.props.showModal?<Route path="/history/:country" exact component={Modal}/>:null
                    }
                </Switch>
            </aside> 
            </Auxiliary>
        )
    }
}
const mapStateToProps = state =>{
    return {
        allSummary: state.allSummary,
        isSorted: state.isSorted,
        showModal:state.showModal,
        showSpinnerCountries:state.showSpinnerCountries
    }
};
const mapDispatchToProps = dispatch=>{
    return {
        onSetAllSummary: (value)=> dispatch({type: actionTypes.SETTING_ALL_SUMMARY,val:value}),
        onSort: ()=>dispatch({type: actionTypes.IS_SORTED}),
        onLoading:()=>dispatch({type:actionTypes.TOGLE_SPINNER_COUNTRIES})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Countries);