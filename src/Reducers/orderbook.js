let initialState = {
    loading: false,
    orderbook: undefined
}

const orderbookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ORDERBOOK':
            return {
                ...state,
                orderbook: action.orderbook
            }
        default: 
            return state
    }
}

export default orderbookReducer;