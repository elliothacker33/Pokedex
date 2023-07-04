document.addEventListener('DOMContentLoaded', function() {
    const header=document.querySelector('header');
    const input=document.querySelector('input[name="name"]');
    const pokemonColorInput = document.querySelector('.color');
    const pokemonColor = pokemonColorInput.value.toLowerCase();
    const pokemonImage = document.querySelector('.pokemon-image > img');
    console.log(pokemonColor);
    if (pokemonColor === "green") {
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#8DC7AC';
        input.style.border='solid 4px #88B989 ';
        header.style.backgroundColor = '#8DC7AC';
        pokemonImage.style.filter = "drop-shadow(10px 10px 100px #8FC38C)";
    }
    if(pokemonColor==="gray"){
        header.style.backgroundColor = '#983543';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#983543';
    }
    if(pokemonColor==='yellow'){
        header.style.backgroundColor = '#F4D77C';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#F4D77C';
    }
    if(pokemonColor==='black'){
        header.style.backgroundColor = '#3F3E3E';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#3F3E3E';
    }
    if(pokemonColor==='brown'){
        header.style.backgroundColor = '#836953';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#836953';
    }
    if(pokemonColor==='blue'){
        header.style.backgroundColor = '#406389';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#406389';
    }
    if(pokemonColor==='red'){
        header.style.backgroundColor = '#E84C02';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#E84C02';
    }
    if(pokemonColor==='purple'){
        header.style.backgroundColor = '#9E9ABA';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#9E9ABA';
    }
    if(pokemonColor==='pink'){
        header.style.backgroundColor = '#F4CFE2';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#F4CFE2';
    }
    if(pokemonColor==='white'){
        header.style.backgroundColor = '#DBDBDC ';
        var poke = document.querySelector('.pokemon');
        poke.style.backgroundColor = '#DBDBDC ';
    }
    
    
    

});
