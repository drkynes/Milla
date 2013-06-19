
function readMAC() {
$.getJSON('test.json', function(data){ 
    for (keys in data) {
        $("#pamela p").append(" " +data[keys]["name"]);
    }
});
}

function readMPD() {
    return 0
}

function readStatus() {
    return 0
}

function readAmbiance() {
    return 0
}

function readPlaylist() {
    return 0
}

$(document).ready(function(){
    readMAC();
    readMPD();
    readStatus();
    readAmbiance();
    readPlaylist(); 
});
