let items = [];
let nbItems = 0;
document.querySelector("#add").addEventListener('click', function (event) {
    event.preventDefault();
    if(document.querySelector("#item").value != "") {
        items[nbItems] = document.querySelector("#item").value;
        document.querySelector("#item").value = "";
        document.querySelector("#items").innerHTML = items;
        nbItems++;
    }
});

document.querySelector("#send").addEventListener('click', function(event) {
    event.preventDefault();
    items.sort(function(a, b) {
        if(a.length < b.length) {
            return 1;
        }
        if(a.length > b.length) {
            return -1;
        }
        return 0;
    });
    document.querySelector("#result").innerHTML = `<b>${items}</b>`;
    document.querySelector("#items").innerHTML = items;
    items = [];
    nbItems = 0;
});

document.querySelector("#reset").addEventListener('click', function(event) {
    items = [];
    nbItems = 0;
    event.preventDefault();
    document.querySelector("#result").innerHTML = `<b>Rien ici pour le moment</b>`;
    document.querySelector("#items").innerHTML = items;
});

document.querySelector("#copyright").innerHTML = new Date().getFullYear() + " Copyright, FKC";