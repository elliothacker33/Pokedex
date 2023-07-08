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
    public function getPreviousEvolution($name) {
        $data = $this->getPokemonSpecies($name);
        $url = $data['evolution_chain']['url'];
        $evolutionChainResponse = file_get_contents($url);
        $evolutionChainData = json_decode($evolutionChainResponse, true);
        $chain = $evolutionChainData['chain'];
    
        $previousEvolution = null;
    
        while (isset($chain['evolves_to'][0])) {
            $evolutionName = $chain['species']['name'];
            $evolvesTo = $chain['evolves_to'][0];
    
            if ($evolvesTo['species']['name'] === $name) {
                $previousEvolution = $evolutionName;
                break;
            }
    
            $chain = $evolvesTo;
        }
    
        if ($previousEvolution === null) {
            $previousEvolution = $name;
        }
    
        return $previousEvolution;
    }
    public function getNextEvolution($name) {
        $data = $this->getPokemonSpecies($name);
        $url = $data['evolution_chain']['url'];
        $evolutionChainResponse = file_get_contents($url);
        $evolutionChainData = json_decode($evolutionChainResponse, true);
        $chain = $evolutionChainData['chain'];
    
        $nextEvolution = null;
        if($chain['species']['name']===$name){
            $nextEvolution=$chain['evolves_to'][0]['species']['name'];
            if($nextEvolution===null)
                return $name;
            else return $nextEvolution;
        }
        while (isset($chain['evolves_to'][0])) {
            $evolvesTo = $chain['evolves_to'][0];
            $evolutionName = $evolvesTo['species']['name'];
    
            if ($evolutionName === $name) {
                if (isset($evolvesTo['evolves_to'][0])) {
                    $nextEvolution = $evolvesTo['evolves_to'][0]['species']['name'];
                }
                break;
            }
    
            $chain = $evolvesTo;
        }
    
        if ($nextEvolution === null) {
            $nextEvolution = $name;
        }
    
        return $nextEvolution;
    }
    
    
    
    
   }
   
   
?>