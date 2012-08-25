var html = require("./snippet")
    , bind = require("../../index")
    , Fragment = require("fragment")
    , curry = require("ap").curry

var update = curry(function (name, stream, field) {
    var changes = {}
    changes[name] = field.value
    stream.write([changes])
})

module.exports = Widget

function Widget() {
    var elem = Fragment(html)
        , foo = elem.querySelector("#foo")
        , bar = elem.querySelector("#bar")
        , stream = bind(elem)

    foo.addEventListener("keyup", update("foo", stream, foo))
    bar.addEventListener("keyup", update("bar", stream, bar))

    return {
        appendTo: appendTo
    }

    function appendTo(parent) {
        parent.appendChild(elem)
    }
}