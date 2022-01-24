import qs from 'qs'
import axiosInstance from "../config/axios";

export default {
    request: function (action, data, options) {
        var defaults = {
            url: action,
            method: 'get',
            headers: {}
        };
        defaults.data = data || {};
        options = options || {};
        if (options.postMode && options.postMode == 'formdata') {
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            options.data = qs.stringify(data);
        }
        options = Object.assign({}, defaults, options || {});
        delete options['postMode'];
        return axiosInstance(options)
    },
    get: function (action, data, options) {
        return this.request(action, data, {
            method: 'get',
            params: data
        })
    },
    getAsync: async function (action, data, options) {
        return this.get(action, data, options)
    },
    post: function (action, data, options) {
        return this.request(action, data, {
            method: 'post'
        })
    },
    postAsync: async function (action, data, options) {
        return this.post(action, data, options)
    },
    postform: function (action, formdata, options) {
        options = Object.assign(options || {}, {
            method: 'post',
            postMode: 'formdata'
        })

        return this.request(action, formdata, options)
    }
}