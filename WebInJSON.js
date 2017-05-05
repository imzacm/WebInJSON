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

    var childElement = '<' + child.type + ' id="' + elementCount + '" ';
    if (child.style) childElement += 'style="' + style + '" ';
    if (child.href) childElement += 'href="' + child.href + '" ';
    if (child.src) childElement += 'src="' + child.src + '" ';
    if (child.class) childElement += 'class="' + child.class + '" ';
    if (child.width) childElement += 'width="' + child.width + '" ';
    if (child.height) childElement += 'height="' + child.height + '" ';
    childElement += '>';
    if (child.text) childElement += child.text;
    childElement += '</' + child.type + '>';
            
    $(parent).append(childElement);

    var parentId = $('#' + elementCount);
    if (child.contents) child.contents.forEach (function(element) {
        addElement(element, parentId);
    });
}

function HTMLtoJSON (html) {
    var json = {};
    var htmlBlock = html;

    console.log(htmlBlock);

    $(htmlBlock).children().each(function (index) {
        console.log('child ' + index + ' = ' + $(this));
    });

    return json;
}