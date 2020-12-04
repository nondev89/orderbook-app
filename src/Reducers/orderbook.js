let initialState = {
}

const orderbookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_WEB3_REQUESTED':
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}

export default orderbookReducer;