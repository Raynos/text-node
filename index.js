var walk = require("dom-walk")
    , forEach = require("iterators").forEachSync
    , Node = window.Node

module.exports = databind

function databind(elem, row) {
    var nodes = {}

    console.log("elem", elem)

    walk([elem], addToSet)

    row.on("changes", update)

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

    function update(changes, changed) {
        forEach(changed, updateNodes)
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