export function loadOrderbook(orderbook) {
    return {
        type: 'LOAD_ORDERBOOK',
        orderbook
    }
}