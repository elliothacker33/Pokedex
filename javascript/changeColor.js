export function colorf() {
    const header = document.querySelector('header');
    const input = document.querySelector('input[name="name"]');
    const pokemonColorInput = document.querySelector('.color');
    const pokemonColor = pokemonColorInput.value.toLowerCase();
    const pokemonImage = document.querySelector('.pokemon-image > img');
    const pokemonContainer = document.querySelector('.pokemon');
  
    switch (pokemonColor) {
      case 'green':
        header.style.backgroundColor = '#8DC7AC';
        input.style.border = 'solid 4px #88B989';
        pokemonContainer.style.backgroundColor = '#8DC7AC';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      case 'gray':
        header.style.backgroundColor = '#983543';
        pokemonContainer.style.backgroundColor = '#983543';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #C5CCDD)';
        break;
      case 'yellow':
        header.style.backgroundColor = '#F4D77C';
        pokemonContainer.style.backgroundColor = '#F4D77C';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 20px #F4D77C)';
        break;
      case 'black':
        header.style.backgroundColor = '#3F3E3E';
        pokemonContainer.style.backgroundColor = '#3F3E3E';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      case 'brown':
        header.style.backgroundColor = '#836953';
        pokemonContainer.style.backgroundColor = '#836953';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      case 'blue':
        header.style.backgroundColor = '#406389';
        pokemonContainer.style.backgroundColor = '#406389';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      case 'red':
        header.style.backgroundColor = '#E84C02';
        pokemonContainer.style.backgroundColor = '#E84C02';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      case 'purple':
        header.style.backgroundColor = '#9E9ABA';
        pokemonContainer.style.backgroundColor = '#9E9ABA';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      case 'pink':
        header.style.backgroundColor = '#F4CFE2';
        pokemonContainer.style.backgroundColor = '#F4CFE2';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      case 'white':
        header.style.backgroundColor = '#DBDBDC';
        pokemonContainer.style.backgroundColor = '#DBDBDC';
        pokemonImage.style.filter = 'drop-shadow(10px 10px 100px #8FC38C)';
        break;
      default:
        // Handle the case when the color doesn't match any of the above cases
        break;
    }
  }
  