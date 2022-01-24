import utils from "./utils";
import {ACTION_TYPES} from "../store";
import store from "../store";

export function initApp() {
    return new Promise(async (resolve, reject) => {
        var res = await utils.get('app/config');
        if (res.code > 0)
        {
            store.dispatch({type: ACTION_TYPES.INIT, data: res.data})
            resolve(true);
        }
        else{
            reject(res.msg);
        }
    })

}