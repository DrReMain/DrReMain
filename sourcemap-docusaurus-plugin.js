module.exports = function (context, options) {
    return {
        name: 'sourcemap-docusaurus-plugin',
        configureWebpack(config, isServer, utils) {
            return {
                devtool: 'source-map'
            };
        },
    };
};
