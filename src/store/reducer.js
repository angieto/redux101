const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                // use concat to return a new array to avoid mutating the state
                results: state.results.concat({ id: new Date(), value: state.counter }) 
            }
        case 'DELETE_RESULT':
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