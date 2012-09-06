var walk = require("dom-walk")
    , forEach = require("iterators").forEachSync
    , Delta = require("delta-stream")
    , Node = window.Node

module.exports = TextNode

function TextNode(elem) {
    var nodes = {}
        , delta = Delta()

    delta.on("change", updateNodes)

    walk([elem], addToSet)

    return delta

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

    function updateNodes(key, value) {
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