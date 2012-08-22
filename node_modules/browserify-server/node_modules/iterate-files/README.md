# iterateFiles

Iterate all the files

## Examples

Basic usage:

    var iterateFiles = require("iterate-files"),
        path = require("path")

    // Load all javascript files in the test folder or any of their sub folders
    iterateFiles(path.join(process.cwd(), "./test"), function (fileName) {
        // run code for each recursively found js file
    }, function (err) {
        // run code when all files have been found recursively
    }, /.js$/)

## Documentation

### iterateFiles(uri, fileCallback, finishCallback, regexp)

recursively call the fileCallback for every file in the folder. Calls the 
    finishCallback if all files have been handled or if an err occurs.

Optionally pass in a regexp to match the fileName by. If the regexp fails then
    the fileCallback will not be called for that file
        
## MIT Licenced