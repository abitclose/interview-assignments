const { tap , override , fixBabelImports , overrideDevServer , addWebpackAlias ,disableEsLint , addWebpackModuleRule} = require('customize-cra')
const { name } = require('./package');
var path = require('path');
const fs = require('fs')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

/**
 * both rsa compatible's override function and customizable
 * @returns {*}
 */
function overrideWebPack(config){
    var fn = override(
        //tap({ message: "Pre - Customizers" }),
        fixBabelImports('import', {
            libraryName: 'antd',
            style: 'css'
        }),
        addWebpackAlias({
            '@': resolve('src'),
        }),
        addWebpackModuleRule({
            test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name : 'assets/[name].[ext]'
                    }
                }
            ]
        })
        //disableEsLint()
    );

    config.output.library = `${name}`;
    config.output.libraryTarget = 'umd';
    config = fn.apply(this , [ config ])

    //for check webpack config
    var file = resolve('./react-customize-cra.app');
    fs.writeFileSync(file, JSON.stringify(config, null, 2), {encoding: 'utf8', flag: 'w'});

    return config;
}

module.exports = {

    /**
     * custom devServer
     */
    devServer: configFunction => {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.headers = {
                "Access-Control-Allow-Origin": "*"
            }
            return config;
        }
    },

    /**
     * custom webpack
     */
    webpack: overrideWebPack,

}