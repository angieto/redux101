import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // use concat to return a new array to avoid mutating the state
                results: state.results.concat({ id: new Date(), value: action.result }) 
            }
        case actionTypes.DELETE_RESULT:
        // filter() returns a new array
            const updatedArr = state.results.filter(result => result.id !== action.id);
            return {
                ...state,
                results: updatedArr
            }
    }
    return state;
};

export default reducer;