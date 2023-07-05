<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../style/landing.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../javascript/favorite.js" defer></script>
    <script src="../javascript/ajaxBuild.js" type="module" defer></script>
    <link rel="icon" type="image/x-icon" href="../images/favicon.ico">
    <title>Pokemon</title>
</head>
<body>
<input type="hidden" class="color" value="" />
<header>
    <section class= "head">
        <h1></h1>
    </section>
    <section class="main">
        <h1 class="main">Pokedex</h1>
    </section>
    <section class="search">
        <form action="landing.php" method="get">
            <input type="text" name="name" placeholder="Pokemon name">  
            <button type="submit">sub</button>
        </form>
    </section>
</header>
<main>
    <section class="pokemon">
        <div class="pokemon-image">
        <img src="" alt="">
        </div>
        <div class="pokemon-name">
            <div id="pokemon-header">
                <div class="pokemon-types">
                </div>
                <div class="name"><h2></h2></div>
                <div class="favorite-wrapper">
                    <img src="../images/Captura de ecrã de 2023-07-05 16-24-27.png" alt="star">
                </div>
            <div id="pokemon-main">

            </div>
        </div>
    </section>
</main>
</body>
</html>
