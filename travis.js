var character = document.getElementById('character');
var block = document.getElementsByClassName('block');

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        character.classList.add('jump');
    }
}

function jump() {
    character.classList.add('jump');
}