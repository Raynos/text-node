var fs = require("fs"),
    path = require("path")

module.exports = iterateFiles

function iterateFiles(uri, callback, done, regexp) {
    var counter = 1
    fs.readdir(uri, readFiles)

    function readFiles(err, files) {
        if (err) {
            return done(err)
        }

        counter += files.length
        files.forEach(isDirOrFile)
        next()
    }

    function isDirOrFile(fileName) {
        fileName = path.join(uri, fileName)

        fs.stat(fileName, readOrRecurse)

        function readOrRecurse(err, stat) {
            if (err) {
                return done(err)
            }

            if (stat.isDirectory()) {
                iterateFiles(fileName, callback, next, regexp)
            } else if (stat.isFile() && (!regexp || regexp.test(fileName))) {
                callback(fileName)
                next()
            } else {
                next()
            }
        }
    }

    function next(err) {
        if (err) {
            return done(err)
        }

        if (--counter === 0) {
            done(null)
        }
    }
}
