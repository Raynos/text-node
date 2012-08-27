var walk = require("dom-walk")
    , forEach = require("iterators").forEachSync
    , DeltaStream = require("delta-stream")
    , Node = window.Node

module.exports = TextNode

function TextNode(elem) {
    var nodes = {}
        , stream = DeltaStream()
        , other = stream.other

    other.on("data", update)

    walk([elem], addToSet)

    return stream

    function addToSet(node) {
        if (!node.dataset) {
            return
        }

        forEach(node.dataset, addNodeToSet, node)
    }

    function addNodeToSet(_, key) {
        var node = this

        if (!nodes[key]) {
            nodes[key] = []
        }

        nodes[key].push(node)
    }

    function update(data) {
        var changes = data[0]

        forEach(changes, updateNodes)
    }

    function updateNodes(value, key) {
        if (!nodes[key]) {
            return
        }

        forEach(nodes[key], updateNode, value)
    }

    function updateNode(elem) {
        var first = elem.firstChild
            , value = this

        if (first && first.nodeType === Node.TEXT_NODE &&
            elem.childNodes.length === 1
        ) {
            return first.data = value
        }

        elem.textContent = value
    }
}