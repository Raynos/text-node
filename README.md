# data-bind

Data bind objects to elements

## Example

``` js
var elem = document.getElementById("thing")

var stream = databind(elem)

stream.write([{
    one: "goes in data-one span"
    , two: "goes in data-two span"
}])
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
    , rowStream = row.createStream()
    , elem = someElement

var stream = databind(elem)

rowStream.pipe(stream)
```

## Installation

`npm install data-bind`

## Contributors

 - Raynos

## MIT Licenced