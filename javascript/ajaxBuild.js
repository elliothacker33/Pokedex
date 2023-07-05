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
        var weight=response.weight+" kg";
        var height=response.height+" m";
        var desc=response.description;
        var male=response.genders['Male']+" %";
        var female=response.genders['Female']+" %";
        var stats=response.stats;
        var c1color;
        var c2color;
        switch (color) {
          case 'green':
            c1color = "#63BB5B";
            c2color = "#B4CA86";
            break;
          case 'pink':
            c1color = "hotpink";
            c2color = "pink";
            break;
          case 'black':
            c1color="black";
            c2color="grey";
            break;
          case 'white':
            c1color="whitesmoke";
            c2color="lightgrey";
            break;
          case 'brown':
            c1color="brown";
            c2color="burlywood";
            break;
          case 'yellow':
              c1color="#F3D33B";
              c2color="#F7EBC6";
            break;
          case 'red':
              c1color="red";
              c2color="lightcoral";
              break;
          case 'purple':
              c1color="purple";
              c2color="#DAD9AE";
          case 'gray':
              c1color="#983543";
              c2color="grey";
          case 'blue':
            c1color="#406389";
            c2color="#95CEDC";
            break;
          default:
            break;
        }
        
        desc = desc.replace(/\f/g, ' ').replace(/\n/g, ' ');
        let sentences = desc.split('.');
sentences = sentences.map(sentence => {
  sentence = sentence.trim();
  if (sentence.length > 0) {
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  return sentence;
});

desc = sentences.join('. ');
        console.log(desc);

        // Update the page elements with the Pokémon data
        document.querySelector('.color').value = color;
        document.querySelector('.head h1').textContent = '#' + id;
        document.querySelector('.pokemon-image img').setAttribute('src', '../images/pokemon/' + name.toLowerCase() + '.png');
        document.querySelector('.pokemon-image img').setAttribute('alt', name);
        document.querySelector('.pokemon-name h2').textContent = name.charAt(0).toUpperCase() + name.slice(1);
        document.querySelector('#pokemon-desc>p').textContent=desc.charAt(0).toUpperCase()+ desc.slice(1);
        document.querySelector('.stats1>div:nth-child(1)>p').textContent=female;
        document.querySelector('.stats1>div:nth-child(2)>p').textContent=male;
        document.querySelector('.stats1>div:nth-child(3)>p').textContent=weight;
        document.querySelector('.stats1>div:nth-child(4)>p').textContent=height;
        
        document.querySelector('.stats2 > div:nth-child(1) > div').setAttribute('data-value', stats['hp']);
        let percentage=(stats['hp']/255)*100;
        document.querySelector('.stats2 > div:nth-child(1) > div').style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${c1color} ${percentage}%, ${c2color} 0)`;
        document.querySelector('.stats2 > div:nth-child(2) > div').setAttribute('data-value1', stats['attack']);
        percentage=(stats['attack']/255)*100;
        document.querySelector('.stats2 > div:nth-child(2) > div').style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${c1color} ${percentage}%, ${c2color} 0)`;
        document.querySelector('.stats2 > div:nth-child(3) > div').setAttribute('data-value2', stats['defense']);
        percentage=(stats['defense']/255)*100;
        document.querySelector('.stats2 > div:nth-child(3) > div').style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${c1color} ${percentage}%, ${c2color} 0)`;
        document.querySelector('.stats2 > div:nth-child(4) > div').setAttribute('data-value3', stats['speed']);
        percentage=(stats['speed']/255)*100;
        document.querySelector('.stats2 > div:nth-child(4) > div').style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${c1color} ${percentage}%, ${c2color} 0)`;
        document.querySelector('.stats2 > div:nth-child(5) > div').setAttribute('data-value4', stats['special attack']);
        percentage=(stats['special attack']/255)*100;
        document.querySelector('.stats2 > div:nth-child(5) > div').style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${c1color} ${percentage}%, ${c2color} 0)`;
        document.querySelector('.stats2 > div:nth-child(6) > div').setAttribute('data-value5', stats['special defense']);
        percentage=(stats['special defense']/255)*100;
        document.querySelector('.stats2 > div:nth-child(6) > div').style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${c1color} ${percentage}%, ${c2color} 0)`;
        
        
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
