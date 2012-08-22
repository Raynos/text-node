var html = require("./snippet")
    , bind = require("../../index")
    , Fragment = require("fragment")
    , curry = require("ap").curry

var update = curry(function (name, row, field) {
    var changed = {}
    changed[name] = field.value
    row.emit("changes", {}, changed)
})

module.exports = Widget

function Widget(row) {
    var elem = Fragment(html)
        , foo = elem.querySelector("#foo")
        , bar = elem.querySelector("#bar")

    bind(elem, row)

    foo.addEventListener("keyup", update("foo", row, foo))
    bar.addEventListener("keyup", update("bar", row, bar))

    return {
        appendTo: appendTo
    }

    function appendTo(parent) {
        parent.appendChild(elem)
    }
}