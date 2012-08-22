module.exports = Fragment

function Fragment(html) {
    var div = document.createElement("div"),
        fragment = document.createDocumentFragment()

    div.innerHTML = html

    while (div.hasChildNodes()) {
        fragment.appendChild(div.firstChild)
    }

    return fragment
}