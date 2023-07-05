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
    public function getPokemonDesc($name){
        $data=$this->getPokemonSpecies($name);
        $description = '';
        if ($data && isset($data['flavor_text_entries'])) {
            foreach ($data['flavor_text_entries'] as $entry) {
                if ($entry['language']['name'] === 'en') {
                    $description = $entry['flavor_text'];
                    break;
                }
            }
        }
        return $description;
              
    }
    public function getWeight($name){
        $data=$this->getPokemon($name);
        $weight=$data['weight']/10;
        return $weight;
    }
    public function getHeight($name){
        $data=$this->getPokemon($name);
        $height=$data['height']/10;
        return $height;
    }
    public function getGenderRatios($name){
        $data=$this->getPokemonSpecies($name);
        $genderRate = $data['gender_rate'];
        if ($genderRate === -1) {
            $genderRatio = ['Male' => 0, 'Female' => 0];
        } else {
            $maleRatio = ($genderRate / 8) * 100;
            $femaleRatio = ((8 - $genderRate) / 8) * 100;
            $genderRatio = ['Male' => $maleRatio, 'Female' => $femaleRatio];
        }   
        return $genderRatio;
    }
    public function getStats($name){
        $data=$this->getPokemon($name);
        $statsToRetrieve = ['hp', 'attack', 'defense', 'speed', 'special-defense', 'special-attack'];
        $baseStats=$data['stats'];
// Calculate the percentages for the selected stats
        $stats = [];
        foreach ($baseStats as $stat) {
            $statName = $stat['stat']['name'];
            if (in_array($statName, $statsToRetrieve)) {
                $statName = str_replace('-', ' ', $statName); // Convert the stat name to a readable format
                $statValue = $stat['base_stat'];
                $stats[$statName] = $statValue;
            }
        }
        return $stats;
    }
   }
   
   
?>