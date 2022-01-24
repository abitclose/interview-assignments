const serverJsonData = require('../data')

const prefix = ''
module.exports = function () {

    var args = [].slice.apply(arguments);
    var callback = typeof( args[0] ) == 'function' ? args[0] : function (req , cb) {
        cb.call(null , args[0])
    }

    return function (req, res, next) {
        var name = req.url.split('?').shift();
        var uri = ('/' + prefix + '/' + name).replace(/\/+/ig,'/');
        var moduleData = serverJsonData[uri];
        if(moduleData){
            res.ok(moduleData)
            res.end();
        }
        next();
    }
}