<?php
$pokemonName = isset($_GET['name']) ? $_GET['name'] : 'pikachu';

// URL for the PokeAPI endpoint
$url = 'https://pokeapi.co/api/v2/pokemon/' . $pokemonName;
// Fetch the data from the API
$response = file_get_contents($url);
// Parse the JSON response
$data = json_decode($response, true);


// Check if the response is valid
if ($data !== null) {
    // Extract the image and name from the response
    $imageUrl = $data['sprites']['front_default'];
    $name = $data['name'];
} else {
    // Default values if the API call fails
    $imageUrl = '';
    $name = 'Pokémon not found';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../style/landing.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../javascript/changeColor.js" defer></script>
    <title>Landing Page</title>
</head>
<body>
<input type="hidden" class="color" value="<?php echo htmlspecialchars($name); ?>"/>
<header>
    <section class= "head">
        <img src="../images/Poké_Ball_icon.svg.png" alt="Pokeball">
        <h1>Pokedex</h1>
    </section>
    <section class="search">
        <form action="landing.php" method="get">
            <input type="text" name="name" placeholder="Enter Pokémon name" value="<?php echo $pokemonName; ?>">
            <button type="submit">Search</button>
        </form>
    </section>
</header>
<main>
    <section class="head">
        <h2><?php echo ucfirst($name); ?></h2> <!-- Pokémon name -->
    </section>
    <section class="pokemon">
        <div class="pokemon-image">
            <img src="<?php echo $imageUrl; ?>" alt="<?php echo $name; ?>">
        </div>
        <div class="pokemon-stats">
            <!-- Display other Pokémon stats here if needed -->
        </div>
    </section>
</main>
</body>
</html>
