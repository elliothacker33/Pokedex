document.addEventListener('DOMContentLoaded', function() {
    const pokemonNameInput = document.querySelector('.color');
    const pokemonName = pokemonNameInput.value.toLowerCase();
    console.log(pokemonName)
    if (pokemonName == 'charizard') {
        console.log("hello");
        document.body.style.backgroundColor = "orange";
    }
    else document.body.style.backgroundImage="linear-gradient(to right top, #ffad15, #ff9c18, #ff8b1f, #ff7928, #ff6630)";
});
