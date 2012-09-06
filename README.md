# text-node

A delta stream which writes to text nodes

## Example

``` js
var elem = document.getElementById("thing")

var delta = TextNode(elem)

delta.set("one", "goes in data-one span")
delta.set("two", "goes in data-two span")
```

``` html
<div id="thing">
    <span data-one></span>
    <span data-two></span>
</div>
```

## Example with scuttlebutt

``` js
var scutt = someScuttlebuttStream
    , elem = someElement

scutt.pipe(TextNode(elem).createStream())
```

## Installation

`npm install text-node`

## Contributors

 - Raynos

## MIT Licenced