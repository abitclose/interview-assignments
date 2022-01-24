/**
 * create a custom server and extend the server's response function
 * @type {createApplication}
 */

const express = require('express')
const cors = require('cors')
const middleware = require('../middleware')


/**
 * create standard structs json response
 * @param code Greater than 0 means correct less than incorrect
 * @param msg string message
 * @param data response object
 * @returns {{msg: string, code: number}}
 */
function message(code = 1 , msg = 'success' , data){
    var response = {
        code,
        msg
    }
    if(data)
        response.data = data;
    return response
}

express.response.ok = function (msg , code = 1) {
    var data = undefined;
    if (typeof (msg) == 'object') {
        data = msg;
        msg = 'success'
    }

    this.send(message(code, msg, data))
}

express.response.error = function(msg ='error' , code = -1) {
    this.send(message(code, msg))
}

module.exports = function () {
    const app = express()
    app.use(cors())
    app.use(middleware())
    return app
}