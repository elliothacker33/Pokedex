<?php
require_once('../utils/Pokemon.php');
require_once('../api/api.php');

function BuildPokemon($name){
    $api = new API();
    $pokemonName = $api->isPokemonValid($name) ? $name : 'pikachu';
    $pokemon = new Pokemon($pokemonName, $api->getId($pokemonName), $api->getMainColor($pokemonName),$api->getPokemonTypes($pokemonName));
    return $pokemon;
}
?>
