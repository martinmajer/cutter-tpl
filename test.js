"use strict";

var cutter = require("./lib/cutter.js");

var output = "";
var snippets = {};

function outputCallback(snippet, text) {
    if (snippet === null) output += text;
    else {
        if (snippets[snippet] == undefined) snippets[snippet] = "";
        snippets[snippet] += text;
    }
}

cutter.get("./test/child2.jtpl", function(err, template) {
    if (err) {
        console.log(err.message + " at " + err.filename + ":" + err.line);
        return;
    }
    // do something with the template
    cutter.run(template, { a: true, b: true, array: [1, 2, 3, 4, 5] }, null, outputCallback);
    if (output) console.log(output);
    if (Object.keys(snippets).length) console.log(snippets);
});


