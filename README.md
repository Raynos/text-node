# text-node

A delta stream which writes to text nodes

## Example

``` js
var elem = document.getElementById("thing")

var stream = TextNode(elem)

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

## Example with delta stream

``` js
var deltas = someDeltaStream
    , elem = someElement

deltas.pipe(TextNode(elem))
```

## Installation

`npm install data-bind`

## Contributors

 - Raynos

## MIT Licenced