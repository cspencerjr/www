function loadFile(name) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", name, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}
