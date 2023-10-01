//store has 2 unction : 
//getState=> gives current value  
//dispatch

import store from "./redux/store.js"
import {increase,decrease,reset} from "./redux/actions/counterActions.js"


store.subscribe(()=>{
    console.log("updated value",store.getState());
})

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(decrease());
store.dispatch(increase());
store.dispatch(reset());
store.dispatch(increase());



