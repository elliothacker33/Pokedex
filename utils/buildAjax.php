<?php
require_once('../api/api.php');
require_once('../utils/buildPokemon.php');

$name = strtolower($_GET['name']);
$pokemon = BuildPokemon($name);
$name=$pokemon->getName();
$id = $pokemon->getId();
$color = $pokemon->getMainColor();
if(is_null($color))
    $color="green";
$types=$pokemon->getTypes();
$description=strtolower($pokemon->getDescription());
$height=$pokemon->getHeight();
$weight=$pokemon->getWeight();
$genders=$pokemon->getGenderRatios();
$stats=$pokemon->getStats();
$last=$pokemon->getLastEvolution();
$next=$pokemon->getNextEvolution();
$response = array("success" => true, "id" => $id, "name" => $name, "color" => $color,"types"=>$types,"description"=>$description,"weight"=>$weight,"height"=>$height,"genders"=>$genders,"stats"=>$stats,"last"=>$last,"next"=>$next);
echo json_encode($response);
?>