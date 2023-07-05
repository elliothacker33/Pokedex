<?php
   class API {
    public function isPokemonValid($name) {
        $url = "https://pokeapi.co/api/v2/pokemon/$name";
        $response = file_get_contents($url);
        $responseData = json_decode($response, true);
        return isset($responseData['name']);
    }
       private function getPokemonSpecies($name) {
           $url = 'https://pokeapi.co/api/v2/pokemon-species/' . strtolower($name);
           $response = file_get_contents($url);
           $data = json_decode($response, true);
           return $data;
       }
   
       private function getPokemon($name) {
           $url = 'https://pokeapi.co/api/v2/pokemon/' . strtolower($name);
           $response = file_get_contents($url);
           $data = json_decode($response, true);
           return $data;
       }
       public function getId($name) {
        $data=$this->getPokemon($name);
          return $data['id'];

    }
    public function getMainColor($name){
        $data=$this->getPokemonSpecies($name);
        return $data['color']['name'];
    }
    public function getPokemonTypes($name){
        $data=$this->getPokemon($name);
        $types=[];
        foreach ($data['types'] as $typeData) {
            $types[] = $typeData['type']['name'];
        }
        return $types;        
    }
   }
   
   
?>