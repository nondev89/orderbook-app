import { all } from 'redux-saga/effects'
import orderbookSaga from './orderbook'

export default function* rootSaga() {
    yield all([
        orderbookSaga()
    ])
}