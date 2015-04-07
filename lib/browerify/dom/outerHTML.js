module.exports = function outerHTML(dom) {
    var html = dom.outerHTML;
    if (html) return html;

    var tagName = dom.tagName.toLowerCase();
    html = '<' + tagName;

    var attrs = dom.attributes;
    for (var i = 0, len = attrs.length; i < len; i++) {
        var attr = attrs[i];
        var name = attr.nodeName;
        var value = attr.nodeValue;
        if (value) {
            value = value.replace("'", "\\'");
        }
        html += " " + name + "='" + value + "'";
    }
    return html += ">" + dom.innerHTML + "</" + tagName + ">";
};

