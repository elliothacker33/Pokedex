<?php
require_once('../api/api.php');
require_once('../utils/buildPokemon.php');

$name = strtolower($_GET['name']);
$pokemon = BuildPokemon($name);
$name=$pokemon->getName();
$id = $pokemon->getId();
$color = $pokemon->getMainColor();
$response = array("success" => true, "id" => $id, "name" => $name, "color" => $color);
echo json_encode($response);
?>