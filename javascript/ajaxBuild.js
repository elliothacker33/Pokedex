import { colorf } from './changeColor.js';
import { clearInput } from './clearInput.js';
import { colorTypesf  } from './colorTypes.js'

window.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonName = urlParams.get('name');
  if (pokemonName) {
    fetchPokemonData(pokemonName);
  } else {
    // Default to 'pikachu' if no name is specified in the URL
    fetchPokemonData('pikachu');
  }
});

const button = document.querySelector('form button');
button.addEventListener('click', function(event) {
  event.preventDefault();
  const pokemonName = document.querySelector('form input').value;
  if(pokemonName!=='')
    fetchPokemonData(pokemonName);
});

function fetchPokemonData(pokemonName) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../utils/buildAjax.php?name=' + encodeURIComponent(pokemonName), true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        console.log(response);
        var id = response.id;
        var name = response.name;
        var color = response.color;
        var types= response.types;
        console.log(color);

        // Update the page elements with the Pokémon data
        document.querySelector('.color').value = color;
        document.querySelector('.head h1').textContent = '#' + id;
        document.querySelector('.pokemon-image img').setAttribute('src', '../images/pokemon/' + name.toLowerCase() + '.png');
        document.querySelector('.pokemon-image img').setAttribute('alt', name);
        document.querySelector('.pokemon-name h2').textContent = name.charAt(0).toUpperCase() + name.slice(1);
        
      var containerTypes = document.querySelector('.pokemon-types');

      // Clear the container
    containerTypes.textContent = '';

// Iterate through the types array
    for (let i = 0; i < types.length; i++) {
      var type = types[i];
      var img = document.createElement('img');
      img.src =  '../images/pokemon-types/' + type.toLowerCase() + '.png'
      img.alt = type;
      containerTypes.appendChild(img);
    }
        colorf();
        clearInput();
        colorTypesf();

        // Update the URL with the current Pokémon name
        const urlParams = new URLSearchParams();
        urlParams.set('name', pokemonName);
        const newUrl = window.location.pathname + '?' + urlParams.toString();
        history.pushState({ pokemonName }, '', newUrl);
      }
    } else if (xhr.status !== 200) {
      alert('Error occurred while fetching the Pokémon data.');
    }
  };
  xhr.send();
}

// Handle browser back and forward navigation
window.addEventListener('popstate', function(event) {
  const pokemonName = event.state && event.state.pokemonName;
  if (pokemonName) {
    fetchPokemonData(pokemonName);
  }
});
