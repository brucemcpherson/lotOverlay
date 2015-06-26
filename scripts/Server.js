
/**
* called to return latest active sheet data
* @return {object} object the data
*/
function getData () {

    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getDataRange();
    var data = range.getValues();
    
    // change it to an object
    var headings = data.shift();
    
    // need some error handling here
    return data.map(function(d) {
        var ob = {};
        d.forEach (function (e,i) {
            ob[headings[i]] = e;
        });
        return ob;
    });
    
}

