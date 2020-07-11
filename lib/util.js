function adjustPath(pathStr) {
    if (pathStr != '.') {
        console.log("param 'path' must be a relative path string. eg:'./hello/world'");
    }
    
}

module.exports = {
    adjustPath
}
