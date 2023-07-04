document.addEventListener('DOMContentLoaded', function() {
    const pokemonColorInput = document.querySelector('.color');
    const pokemonColor = pokemonColorInput.value.toLowerCase();
    const pokemonImage = document.querySelector('.pokemon-image > img');
    console.log(pokemonColor);
    // Set the main color as the drop shadow color for the Pokémon image
    pokemonImage.style.filter = `drop-shadow(10px 10px 80px ${pokemonColor})`;
});
