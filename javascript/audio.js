var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

playButton.addEventListener('click', toggleAudio);