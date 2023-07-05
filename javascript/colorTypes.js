export function colorTypesf() {
    var container = document.querySelector('.pokemon-types');
    var images = container.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      var type = img.alt;
      switch (type) {
        case 'normal':
          img.style.filter = 'drop-shadow(2px 2px 20px #9099A1)';
          break;
        case 'fire':
          img.style.filter = 'drop-shadow(2px 2px 20px #FF9C54)';
          break;
        case 'water':
          img.style.filter = 'drop-shadow(2px 2px 20px #4E90D5)';
          break;
        case 'grass':
          img.style.filter = 'drop-shadow(2px 2px 20px #63BB5B)';
          break;
        case 'electric':
          img.style.filter = 'drop-shadow(2px 2px 20px #F3D33B)';
          break;
        case 'ice':
          img.style.filter = 'drop-shadow(2px 2px 20px #78CBBD)';
          break;
        case 'fighting':
          img.style.filter = 'drop-shadow(2px 2px 20px #CF4069)';
          break;
        case 'poison':
          img.style.filter = 'drop-shadow(2px 2px 20px #AB6AC8)';
          break;
        case 'ground':
          img.style.filter = 'drop-shadow(2px 2px 20px #D97746)';
          break;
        case 'flying':
          img.style.filter = 'drop-shadow(2px 2px 20px #92AADE)';
          break;
        case 'psychic':
          img.style.filter = 'drop-shadow(2px 2px 20px #F97176)';
          break;
        case 'bug':
          img.style.filter = 'drop-shadow(2px 2px 20px #90C12C)';
          break;
        case 'rock':
          img.style.filter = 'drop-shadow(2px 2px 20px #C7B78B)';
          break;
        case 'ghost':
          img.style.filter = 'drop-shadow(2px 2px 20px #5269AC)';
          break;
        case 'dragon':
          img.style.filter = 'drop-shadow(2px 2px 20px #0A6DC4)';
          break;
        case 'dark':
          img.style.filter = 'drop-shadow(2px 2px 20px #5A5366)';
          break;
        case 'steel':
          img.style.filter = 'drop-shadow(2px 2px 20px #5A8EA1)';
          break;
        case 'fairy':
          img.style.filter = 'drop-shadow(2px 2px 20px #EC8FE6)';
          break;
        default:
          break;
      }
    }
  }
  