var button =  document.getElementById("fetchButton");

button.onclick = function() {

    var time = new Date().getTime();
    var hash = CryptoJS.MD5(time + keysInfo.private + keysInfo.public).toString();
    var url = 'https://gateway.marvel.com:443/v1/public/characters'
    
    $.getJSON(url, {
        ts: time,
        apikey: keysInfo.public,
        hash: hash})
        .done(function(data) {
           console.log(data.data.results);
        })
        .fail(function(err) {
           console.log(err);
        });
    
    console.log("Hey!");

}