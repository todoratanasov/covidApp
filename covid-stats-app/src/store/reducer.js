import * as actionTypes from './actions';


const initialState = {
    allSummary:[],
    isSorted:false,
    historyStats:[],
    showModal:false,
    showSpinnerCountries:true,
    showSpinnerModal:true
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
            };
        case actionTypes.SETTING_HISTORY:
            return{
                ...state,
                historyStats:action.val
            };
        case actionTypes.DELETE_HISTORY:
            return{
                ...state,
                historyStats:[]
            };
        case actionTypes.TOGLE_MODAL:
            return{
                ...state,
                showModal:!state.showModal
            };
        case actionTypes.TOGLE_SPINNER_COUNTRIES:
            return{
                ...state,
                showSpinnerCountries:!state.showSpinnerCountries
            };
        case actionTypes.TOGLE_SPINNER_MODAL:
            return{
                ...state,
                showSpinnerModal:!state.showSpinnerModal
            };
        default:     
            return state;
    }  
}

export default reducer;