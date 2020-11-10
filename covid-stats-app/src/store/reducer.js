import * as actionTypes from './actions';


const initialState = {
    allSummary:[],
    isSorted:false
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
        
    }  

    return state;
}

export default reducer;