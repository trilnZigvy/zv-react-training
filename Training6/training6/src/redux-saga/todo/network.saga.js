// import { setNetworkStatus } from "./action";
import { todoAction } from "./action";
import { eventChannel } from "@redux-saga/core";
import { fork, put, take } from "@redux-saga/core/effects";
function* startChannelNetwork(){
    const channelNetwork = eventChannel((listener) => {
        window.addEventListener("offline", function () {
          listener(false);
        });
        window.addEventListener("online", function () {
          listener(true);
        });
        return () => {
          window.removeEventListener("online");
          window.removeEventListener("offline");
        };
    });

    while(true){
        const connectInfo = yield take(channelNetwork)
        yield put(todoAction.setNetworkStatus(connectInfo))
    }
}

function* networkSaga(){
    try{
        yield put (todoAction.setNetworkStatus(navigator.onLine));
        yield fork(startChannelNetwork);
    }
    catch(error){
        console.log("network Saga", error);
    }
}

export default networkSaga