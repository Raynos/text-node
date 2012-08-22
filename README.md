# data-bind

Data bind objects to elements

## Example

``` js
var elem = document.getElementById("thing")
    , row = new EventEmitter()

databind(elem, row)

row.emit("changes", null, {
    one: "goes in data-one span"
    , two: "goes in data-two span"
})
```

``` html
<div id="thing">
    <span data-one></span>
    <span data-two></span>
</div>
```

## Example with crdt row

``` js
var doc = new crdt.Doc()
    , row = doc.get(rowId)
    , elem = someElement

databind(elem, row)
```

## Installation

`npm install data-bind`

## Contributors

 - Raynos

## MIT Licenced