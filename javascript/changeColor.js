export function colorf() {
    const header = document.querySelector('header');
    const input = document.querySelector('input[name="name"]');
    const pokemonColorInput = document.querySelector('.color');
    const pokemonColor = pokemonColorInput.value.toLowerCase();
    const pokemonContainer = document.querySelector('.pokemon');
    
  
    switch (pokemonColor) {
      case 'green':
        header.style.backgroundColor = '#8DC7AC';
        input.style.border = 'solid 4px #88B989';
        pokemonContainer.style.backgroundColor = '#8DC7AC';
        break;
      case 'gray':
        header.style.backgroundColor = '#983543';
        input.style.border = 'solid 4px #635F6C';
        pokemonContainer.style.backgroundColor = '#983543';
        break;
      case 'yellow':
        header.style.backgroundColor = '#F4D77C';
        input.style.border = 'solid 4px #F6EAC7';
        pokemonContainer.style.backgroundColor = '#F4D77C';
        break;
      case 'black':
        header.style.backgroundColor = '#3F3E3E';
        input.style.border = 'solid 4px #635F6C';
        pokemonContainer.style.backgroundColor = '#3F3E3E';
        break;
      case 'brown':
        header.style.backgroundColor = '#836953';
        input.style.border = 'solid 4px #DBBD98';
        pokemonContainer.style.backgroundColor = '#836953';
        break;
      case 'blue':
        header.style.backgroundColor = '#406389';
        input.style.border = 'solid 4px #8FC5D2';
        pokemonContainer.style.backgroundColor = '#406389';
        break;
      case 'red':
        header.style.backgroundColor = '#E84C02';
        input.style.border = 'solid 4px #E98D46';
        pokemonContainer.style.backgroundColor = '#E84C02';
        break;
      case 'purple':
        header.style.backgroundColor = '#9E9ABA';
        input.style.border = 'solid 4px #DAD9AE';
        pokemonContainer.style.backgroundColor = '#9E9ABA';
        break;
      case 'pink':
        header.style.backgroundColor = '#F4CFE2';
        input.style.border = 'solid 4px #EEA8B1';
        pokemonContainer.style.backgroundColor = '#F4CFE2';
        break;
      case 'white':
        header.style.backgroundColor = '#DBDBDC';
        input.style.border = 'solid 4px #B9C0D2';
        pokemonContainer.style.backgroundColor = '#DBDBDC';
        break;
      default:
        // Handle the case when the color doesn't match any of the above cases
        break;
    }
  }
  