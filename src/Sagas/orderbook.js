import { call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { TEST_REQUESTED } from '../Actions/constants';
import { REGISTER } from './constants';

function onOpen(ws) {
    console.log('Opening WS...')
    ws.send(REGISTER)
}

function onMessage(e, emitter) {
    let msg = null
    try {
        msg = JSON.parse(e.data)
    } catch(e) {
        console.error(`Error parsing : ${e.data}`)
    }
    if (msg) {
        console.log(msg);
        const { payload: book } = msg
        const channel = msg.channel
        switch (channel) {
        case 'TEST_REQUESTED':
            return emitter({ type: TEST_REQUESTED, book })
        default:
            // nothing to do
        }
    }
}

function onError(error) {
    console.log('WebSocket error ' + error)
    console.dir(error)
}

function websocketInitChannel() {
    return eventChannel( emitter => {
        // init the connection here
        const ws = new WebSocket("ws://192.168.1.187:8080")
        ws.onopen = () => {onOpen(ws)}
        ws.onerror = (error) => {onError(error)}
        ws.onmessage = (e) => {onMessage(e, emitter)}
        
        // unsubscribe function
        return () => {
          console.log('Socket off')
        }
    })
}

function* orderbookSaga() {
    const channel = yield call(websocketInitChannel)
    while (true) {
      const action = yield take(channel)
      yield put(action)
    }
}

export default orderbookSaga;