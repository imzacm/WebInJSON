var elementCount = 0;
function addElement (child, parent) {
    if (!child.type) return;
    elementCount++;
    console.log('child = ' + JSON.stringify(child));
    console.log('element count = ' + elementCount);

    if (child.style) {
        var style = '';
        child.style.forEach(function(css) {
            style += css;
        });
        child.style = style;
    }

    var childElement = '<' + child.type + ' id="' + elementCount + '"';
    if (child.style) childElement += ' style="' + style + '"';
    childElement += '>';
    if (child.text) childElement += child.text;
    childElement += '</' + child.type + '>';
            
    $(parent).append(childElement);

    var parentId = $('#' + elementCount);
    if (child.contents) child.contents.forEach (function(element) {
        addElement(element, parentId);
    });
}