<?php
class Pokemon {
    private $name;
    private $id;
    private $weight;
    private $height;
    private $mainColor; 
    private $description;  
    private $types;
    private $genderRatios;
    private $nextEvolution;
    private $lastEvolution;
    private $stats;
    public function __construct($name, $id, $mainColor,$types,$description,$weight,$height,$genderRatios,$stats,$nextEvolution,$lastEvolution) {
        $this->name = $name;
        $this->id = $id;
        $this->mainColor = $mainColor;
        $this->types=$types;
        $this->genderRatios=$genderRatios;
        $this->weight=$weight;
        $this->height=$height;
        $this->description=$description;
        $this->stats=$stats;
        $this->lastEvolution=$lastEvolution;
        $this->nextEvolution=$nextEvolution;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function setName($name) {
        $this->name = $name;
    }
    
    public function getId() {
        return $this->id;
    }
    
    public function setId($id) {
        $this->id = $id;
    }
    
    public function getMainColor() {
        return $this->mainColor;
    }
    
    public function setMainColor($mainColor) {
        $this->mainColor = $mainColor;
    }
    public function getTypes() {
        return $this->types;
    }
    
    public function setTypes($types) {
        $this->types = $types;
    }
    public function getDescription() {
        return $this->description;
    }
    
    public function setDescription($description) {
        $this->description = $description;
    }
    public function getWeight() {
        return $this->weight;
    }
    
    public function setWeight($weight) {
        $this->weight = $weight;
    }
    public function getHeight() {
        return $this->height;
    }
    
    public function setHeight($height) {
        $this->height = $height;
    }
    public function getGenderRatios() {
        return $this->genderRatios;
    }
    
    public function setGenderRatios($genderRatios) {
        $this->genderRatios = $genderRatios;
    }
    public function getStats() {
        return $this->stats;
    }
    
    public function setStats($stats) {
        $this->stats = $stats;
    }
    public function getNextEvolution() {
        return $this->nextEvolution;
    }
    
    public function setNextEvolution($nextEvolution) {
        $this->nextEvolution = $nextEvolution;
    }
    public function getLastEvolution() {
        return $this->lastEvolution;
    }
    
    public function setLastEvolution($lastEvolution) {
        $this->lastEvolution = $lastEvolution;
    }
}
?>