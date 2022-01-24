export default {
    httpSetting: {
        timeout: 8000,
        axiosDebug: {
            enable: true,
            logSetting: {
                request: true,
                response: false,
                transform: false
            }
        }
    },
    tokenSetting: {
        tokenHeaderName: 'token',
    }
}