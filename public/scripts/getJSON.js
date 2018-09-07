async function getJSON(url, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) 
    {
        xmlhttp = new XMLHttpRequest();
    } 
    else 
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.responseType = 'text';
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === xmlhttp.DONE) {
            if (xmlhttp.status === 200) {
                callback(null, xmlhttp.responseText)
            } else {
                callback(xmlhttp.statusText)
            }
        }
    };
    xmlhttp.send();
}