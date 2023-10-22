var modal = document.getElementById("myModal");
var button = document.getElementById("myButton");

button.onclick = function() {
    modal.classList.add('show');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}