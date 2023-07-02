document.addEventListener('DOMContentLoaded', function() {
    const pokemonNameInput = document.querySelector('.color');
    const pokemonName = pokemonNameInput.value.toLowerCase();
    console.log(pokemonName)
    if (pokemonName == 'charizard') {
        console.log("hello");
        document.body.style.backgroundColor = "orange";
    }
    else document.body.style.backgroundColor = "yellow";
});
