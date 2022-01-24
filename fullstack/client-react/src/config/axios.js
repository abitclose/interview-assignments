import axios from 'axios'
import {stringFormat, printLog, printJson, getToken} from "../lib/helpers";
import {message} from "antd";
import qs from 'qs'
import setting from "../config/setting";


// check enable axios request/response log
let HTTP_DEBUG = setting.httpSetting.axiosDebug.enable;

// axios request/response log setting
let AXIOS_LOG_OPTIONS = Object.assign({} , {
    request: false,
    response: false
},setting.httpSetting.axiosDebug.logSetting)

const addLog = (...args) => {
    if(!HTTP_DEBUG){
        return;
    }
    printLog.apply(null , args)
}

axios.defaults.headers['Content-Type'] = 'application/app;charset=utf-8'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: setting.httpSetting.timeout
})

axiosInstance.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

axiosInstance.defaults.transformRequest = [function(data, headers) {
    if (AXIOS_LOG_OPTIONS.transform) {
        addLog(JSON.stringify({
            data: data || {},
            headers: headers
        }, null, 2), 'REQUEST / TRANSFORM')
    }
    if (headers['Content-Type'] && headers['Content-Type'] == 'application/x-www-form-urlencoded') {
        return data
    }
    return JSON.stringify(data)
}]

/**
 * add request interceptors
 */
axiosInstance.interceptors.request.use(
    config => {

        addLog(config.url, ['REQUEST ', config.method.toUpperCase()].join(' / '))

        const token = getToken();
        if(token){
            config.headers[setting.tokenSetting.tokenHeaderName] = token;
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

/**
 * add response interceptors
 */
axiosInstance.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        if (AXIOS_LOG_OPTIONS.response) {
            addLog(response.config.url, ['RESPONSE', response.config.method.toUpperCase()].join(' / '))
        }

        // if custom globle response code
        if (res.code == -10000) {

        }

        //if error response
        if (res.code <= 0) {
            message.error(res.msg)
            return Promise.reject(res.msg)
        }

        //need custom implement
        if (res.code === 'NEED IMPLEMENT') {

        }
        return res
    },
    error => {
        message.error(error)
        console.log(error)
        return Promise.reject(error)
    }
)

export function hideRequestLog(options) {
    AXIOS_LOG_OPTIONS = Object.assign(AXIOS_LOG_OPTIONS, options || {})
}

export default axiosInstance;