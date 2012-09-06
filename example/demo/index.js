var html = require("./snippet")
    , TextNode = require("../../index")
    , Fragment = require("fragment")
    , curry = require("ap").curry

var update = curry(function (name, delta, field) {
    delta.set(name, field.value)
})

module.exports = Widget

function Widget() {
    var elem = Fragment(html)
        , foo = elem.querySelector("#foo")
        , bar = elem.querySelector("#bar")
        , delta = TextNode(elem)

    foo.addEventListener("keyup", update("foo", delta, foo))
    bar.addEventListener("keyup", update("bar", delta, bar))

    return {
        appendTo: appendTo
    }

    function appendTo(parent) {
        parent.appendChild(elem)
    }
}