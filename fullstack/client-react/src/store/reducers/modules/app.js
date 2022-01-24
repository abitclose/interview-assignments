import * as types from '../../types'
const initState = {
    token: '',
    config : []
}
export default function app(state = initState, action) {
    const { type , data} = action;
    //console.log('ACTION -> ' + action.type)
    // if(data){
    //     console.log(JSON.stringify(data, null, 2))
    // }
    switch (type) {
        case types.SET_TOKEN:
            return {
                ...state,
                token: action.data
            }
        case types.INIT:
            return {
                ...state,
                config :  data
            };
        default:
            return state
    }
}