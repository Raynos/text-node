var LiveReloadClient = require("live-reload")
    , Widget = require("./demo")

Widget().appendTo(document.body)

LiveReloadClient(8081)