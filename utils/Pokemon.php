<?php
class Pokemon {
    private $name;
    private $id;
    private $mainColor;
    
    public function __construct($name, $id, $mainColor) {
        $this->name = $name;
        $this->id = $id;
        $this->mainColor = $mainColor;
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
}
?>