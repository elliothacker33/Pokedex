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
            <div>
            <input type="text" name="name" placeholder="Pokemon name"> 
            <div>
            <img id='find' src="../images/search.png">
            </div>
            </div>
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
        </div>
            <div id="pokemon-main">
                <div id="pokemon-desc">
                    <p></p>
                </div>
                <div id="pokemon-stats">
                    <div class="stats1">
                        <div>
                            <img src="../images/male.png" alt="male">
                            <p></p>
                        </div>
                        <div>
                        <img src="../images/female.png" alt="male">
                        <p></p>
                        </div>
                        <div>
                            <img src="../images/weight.png" alt="weight">
                            <p></p>
                        </div>
                        <div>
                            <img src="../images/height.png" alt="height">
                            <p></p>
                        </div>

                    </div>
                    <div class="stats2">
                        <div>
                        <div data-value='' class="progress-bar">
                        </div>
                        <p>HP</p>
                        </div>
                        <div>
                        <div data-value1='0' class="progress-bar">
                        </div>
                        <p>Attack</p>
                        </div>
                        <div>
                        <div data-value2='0'class="progress-bar">
                        </div>
                        <p>Defense</p>
                        </div>
                        <div>
                        <div data-value3='0'class="progress-bar">
                        </div>
                        <p>Speed</p>
                        </div>
                        <div>
                        <div data-value4='0' class="progress-bar">
                        </div>
                        <p>Special Attack</p>
                        </div>
                        <div>
                        <div data-value5='0' class="progress-bar">
                        </div>
                        <p>Special Defense</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</body>
</html>
