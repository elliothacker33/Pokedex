const favorite = document.querySelector('.favorite-wrapper > img');
let isClicked = false;

favorite.addEventListener('mouseover', () => {
    if (!isClicked && favorite.alt === 'star') {
        favorite.alt = 'starfull';
        favorite.src = '../images/result.png';
        favorite.style.transform = 'scale(1.2)'; // Apply scale transform
        favorite.style.filter = 'drop-shadow(0 0 20px #EFC32F)'; // Apply drop shadow
    }
});

favorite.addEventListener('mouseout', () => {
    if (!isClicked && favorite.alt === 'starfull') {
        favorite.alt = 'star';
        favorite.src = '../images/Captura de ecrã de 2023-07-05 16-24-27.png';
        favorite.style.transform = 'scale(1)'; // Reset the scale transform
        favorite.style.filter = 'drop-shadow(0 0 20px black)'; // Apply drop shadow
    }
});

favorite.addEventListener('click', () => {
    if (isClicked) {
        favorite.alt = 'star';
        favorite.src = '../images/Captura de ecrã de 2023-07-05 16-24-27.png';
        favorite.style.transform = 'scale(1)'; // Reset the scale transform
        favorite.style.filter = 'drop-shadow(0 0 20px black)'; // Apply drop shadow
    } else {
        favorite.alt = 'starfull';
        favorite.src = '../images/result.png';
        favorite.style.transform = 'scale(1.2)'; // Apply scale transform
        favorite.style.filter = 'drop-shadow(0 0 20px #EFC32F)'; // Apply drop shadow
    }
  
    isClicked = !isClicked;
});
