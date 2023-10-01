

//actions are obzects in redux
//action types are names
//action creators=> functions that wil return action obzects


// const inc={
//     type : "INCREASE"
// }

import { INCREASE,DECREASE,RESET } from "./actionTypes.js";

//INCREASE ACTION

export const increase=()=>{

    return (
        {
            type:INCREASE
        }
    )
}

//decrease action
export const decrease=()=>{

    return (
        {
            type:DECREASE
        }
    )
}

//reset action
export const reset=()=>{

    return (
        {
            type:RESET
        }
    )
}

