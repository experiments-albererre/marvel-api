var button =  document.getElementById("fetchButton");

var dom = {
    id: document.querySelectorAll('.id'),
    name: document.querySelector('.name'),
    description: document.querySelector('.description'),
    resourceURI: document.querySelectorAll('.resourceURI')
};

button.onclick = function() {

    var _name =  document.getElementById("name").value;

    var time = new Date().getTime();
    var hash = CryptoJS.MD5(time + keysInfo.private + keysInfo.public).toString();
    var url = 'https://gateway.marvel.com:443/v1/public/characters'
    
    $.getJSON(url, {
        name: _name,
        ts: time,
        apikey: keysInfo.public,
        hash: hash})
        .done(function(data) {
           console.log(data.data.results);

           // put API info in HTML
           dom.id.textContent = data.data.results[0].id;
           dom.name.textContent = data.data.results[0].name;
           dom.description.textContent = data.data.results[0].description;
           dom.resourceURI.textContent = data.data.results[0].resourceURI;
        })
        .fail(function(err) {
           console.log(err);
        });
    
    console.log("Loading...");

}