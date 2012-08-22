var LiveReloadClient = require("live-reload")
    , Widget = require("./demo")
    , EventEmitter = require("events").EventEmitter

Widget(new EventEmitter()).appendTo(document.body)

LiveReloadClient(8081)