var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']

var tag = {};
for (var i = 0; i < tags.length;
    i++) {
    var a = tags[i];
    if (tag[a]) tag[a] += 1;
    else tag[a] = 1;
}
console.log(tag);

var tagMas = Object.values(tag);
var newTag = Object.keys(tag);
for (let i = 0; i < tagMas.length;
    i++) {
    newTag[i] = newTag[i] + ": " +
        tagMas[i];
}
var tagObj = { ...newTag };

console.log(tagObj);