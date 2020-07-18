
const core = require('@actions/core')

// TODO: 3.3
const rversions = [ "3.4", "3.5", "3.6", "4.0", "4.1" ]

async function run() {
    try {
        if (process.platform === 'win32') {
            var build_windows = require('./lib/build-windows');
            await build_windows(rversions);
        } else if (process.platform === 'darwin') {
            var build_macos = require('./lib/build-macos');
            await build_macos(rversions);
        } else if (process.platform === 'linux') {
            var build_linux = require('./lib/build-linux');
            await build_linux(rversions);
        } else {
            throw new Error('Unsupported OS, only Windows, Linux and macOS are supported');
        }
        console.log("::endgroup::")
    } catch (error) {
        console.log(error);
        core.setFailed(error.message);
    }
}

run()
