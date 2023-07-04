<?php
$pokemonName = isset($_GET['name']) ? $_GET['name'] : 'pikachu';

// URL for the PokeAPI endpoint
$url = 'https://pokeapi.co/api/v2/pokemon-species/' . strtolower($pokemonName);
// Fetch the data from the API
$response = file_get_contents($url);
// Parse the JSON response
$data = json_decode($response, true);
$url = "https://pokeapi.co/api/v2/pokemon/".strtolower($pokemonName);
$response = file_get_contents($url);
// Parse the JSON response
$data2 = json_decode($response, true);
$pokeid=$data2['id'];
$maincolor = $data['color']['name'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../style/landing.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../javascript/changeColor.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="../javascript/radarChart.js" defer></script>
    <script src="../javascript/clearInput.js" defer></script>
    <title>Landing Page</title>
</head>
<body>
<input type="hidden" class="color" value="<?php echo htmlspecialchars($maincolor); ?>"/>
<header>
    <section class= "head">
        <h1>#<?php echo $pokeid?></h1>
    </section>
    <section class="search">
        <form action="landing.php" method="get">
            <input type="text" name="name" placeholder="Pokemon name" value="<?php echo $pokemonName; ?>">
            
        </form>
    </section>
</header>
<main>
    <section class="pokemon">
        <div class="pokemon-image">
        <img src="../images/pokemon/<?php echo strtolower($pokemonName) ?>.png" alt="<?php echo $pokemonName; ?>">
        </div>
        <div class="pokemon-name">
        <h2><?php echo ucfirst($pokemonName); ?></h2> <!-- Pokémon name -->
        </div>
    </section>
    
</div>

    </section>
</main>
</body>
</html>
