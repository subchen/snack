
var document = require('document');

/**
 * @param {String} code - source code
 * @param {HTMLElement} node - parent node which append script tag, default is document.body
 * @param {String} path - a file name which display in source tab of chrome developer tool
 */
module.export = function evalScript(code, node, file) {
    if (file) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript
        // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
        code = code + "\n//# sourceURL=" + file;
    }

    var dom = document.createElement('script');
    dom.type = "text/javascript";
    dom.text = code;

    node = node || document.body;
    node.appendChild(dom);
};
