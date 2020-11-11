import {Component} from 'react';
import axios from 'axios';
import{connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import History from '../../components/Hystory/History';
import Auxiliary from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component{
    
    componentDidMount(){
        const country = this.props.match.params.country
        axios.get(`/dayone/country/${country}`)
        .then(result=>{
            this.props.onSetHistory(result.data);
        })
    }
    componentWillUnmount(){
        this.props.onDeleteHistory()
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
            <Auxiliary>
                <Backdrop onTogle={this.props.onTogle}/>
                <div className='Modal'>
                    <h2>{this.props.historyStats[0]?this.props.historyStats[0].Country:null}</h2>
                    {allDays}
                </div>
            </Auxiliary>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        historyStats:state.historyStats
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
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);