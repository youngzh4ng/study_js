const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    constructor (options) {
        // Default options
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log('The webpack build process is starting.');
            console.log(this.options);
        });
    }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;