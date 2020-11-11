import {Component} from 'react';
import axios from 'axios';
import{connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import History from '../../components/Hystory/History';
import Auxiliary from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import Spinner from '../Spinner/Spinner'


class Modal extends Component{
    
    componentDidMount(){
        const country = this.props.match.params.country
        axios.get(`/dayone/country/${country}`)
        .then(result=>{
            this.props.onSetHistory(result.data);
            this.props.onLoading();
        })
    }
    componentWillUnmount(){
        this.props.onDeleteHistory();        
        this.props.onLoading();
    }
    render(){
        const allDays = this.props.historyStats.map(day=>{
            return(
                <History
                key={day.Date}
                curDate={day.Date} 
                activeCases={day.Active}
                confirmed={day.Confirmed}
                recovered={day.Recovered}
                death={day.Deaths}
                />
            )
        })
        return(
            this.props.showSpinnerModal
            ?
            <Spinner/>
            :
            <Auxiliary>
                <Backdrop onTogle={this.props.onTogle}/>
                <div className='modal'>
                    <h2>{this.props.historyStats[0]?this.props.historyStats[0].Country:null}</h2>
                    {allDays}
                </div>
            </Auxiliary>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        historyStats:state.historyStats,        
        showSpinnerModal:state.showSpinnerModal
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onSetHistory:(value)=>dispatch({
            type:actionTypes.SETTING_HISTORY,
            val:value
        }),
        onDeleteHistory:()=>dispatch({
            type:actionTypes.DELETE_HISTORY
        }),
        onTogle:()=>dispatch({
            type:actionTypes.TOGLE_MODAL
        }),        
        onLoading:()=>dispatch({
            type:actionTypes.TOGLE_SPINNER_MODAL
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);