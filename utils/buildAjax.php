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
$response = array("success" => true, "id" => $id, "name" => $name, "color" => $color,"types"=>$types);
echo json_encode($response);
?>