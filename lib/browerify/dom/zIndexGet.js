'use strict';

var window = require('window');

/**
 * 获取整个document最大可用的 zIndex
 *
 * @returns {Number}
 */
module.exports = function zIndexGet() {
    var nodes = window.document.getElementsByTagName('*');
    var max = 0;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var zIndex;
        if (window.getComputedStyle) {
            var styles = window.getComputedStyle(node, null);
            zIndex = styles.getPropertyValue('zIndex') || styles.zIndex;
        } else if (node.currentStyle) {
            zIndex = node.currentStyle.zIndex;
        } else {
            zIndex = node.style.zIndex;
        }
        if (zIndex !== '') {
            zIndex = (+zIndex) || 0;
            if (max < zIndex) {
                max = zIndex;
            }
        }
    }
    return max + 1;
};
