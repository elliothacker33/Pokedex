<?php
class Pokemon {
    private $name;
    private $id;
    private $mainColor;   
    private $types;
    public function __construct($name, $id, $mainColor,$types) {
        $this->name = $name;
        $this->id = $id;
        $this->mainColor = $mainColor;
        $this->types=$types;
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
        $this->name = $types;
    }
}
?>