import * as actionTypes from './actions';


const initialState = {
    allSummary:[],
    isSorted:false,
    historyStats:[]
}

const reducer = (state=initialState, action)=>{

    switch(action.type){
        case actionTypes.SETTING_ALL_SUMMARY:
            return {
                ...state,
                allSummary:action.val
            };
        case actionTypes.IS_SORTED:
            return{
                ...state,
                isSorted:!state.isSorted
            }
        case actionTypes.SETTING_HISTORY:
            return{
                ...state,
                historyStats:action.val
            }
        case actionTypes.DELETE_HISTORY:
            return{
                ...state,
                historyStats:[]
            }
        default:     
            return state;
    }  
}

export default reducer;