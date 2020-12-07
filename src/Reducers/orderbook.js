let initialState = {
    data: undefined
}

const orderbookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ORDERBOOK':
            return {
                ...state,
                data: action.orderbook
            }
        default: 
            return state
    }
}

export default orderbookReducer;