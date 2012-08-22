var iterateFiles = require("./index"),
    path = require("path"),
    assert = require("assert"),
    results = []

iterateFiles(path.join(__dirname, "folder"), function (fileName) {
    results.push(fileName)
}, function (err) {
    assert(err === null)
    assert(results[0].indexOf("foo") !== -1)
    assert(results[1].indexOf("bar") !== -1)
    console.log("Completed")
})