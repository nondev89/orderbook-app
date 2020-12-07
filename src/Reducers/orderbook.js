let initialState = {
}

const orderbookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ORDERBOOK':
            const pair = action.orderbook.pair;
            return {
                ...state,
                [pair]: {
                    data: action.orderbook.data,
                    updatesPerMinute: action.orderbook.updatesPerMinute
                }
            }
        default: 
            return state
    }
}

export default orderbookReducer;