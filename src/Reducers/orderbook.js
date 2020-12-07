let initialState = {
}

const orderbookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ORDERBOOK':
            const pair = action.orderbook.pair;
            return {
                ...state,
                [pair]: action.orderbook.data
            }
        default: 
            return state
    }
}

export default orderbookReducer;