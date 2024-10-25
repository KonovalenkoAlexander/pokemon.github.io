
import Pokemon from './pokemon.js';
import pokemons from './pokemons.js';

// Helper function to get a random pokemon from the list
function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
}

// Initialize players with random pokemons
let player1 = new Pokemon({
    ...getRandomPokemon(),
    selectors: 'character',
});

let player2 = new Pokemon({
    ...getRandomPokemon(),
    selectors: 'enemy',
});

// Update player images
const $elImgPlayer1 = document.getElementById('img-player1');
$elImgPlayer1.src = player1.img;

const $elImgPlayer2 = document.getElementById('img-player2');
$elImgPlayer2.src = player2.img;

// Event listener for the attack button
document.getElementById('btn-kick').addEventListener('click', () => {
    player1.changeHP(randomDamage(20, 40));
    player2.changeHP(randomDamage(20, 40));

    // Check if any player has lost, and reset with new pokemons
    if (player1.hp.current <= 0 || player2.hp.current <= 0) {
        player1 = new Pokemon({
            ...getRandomPokemon(),
            selectors: 'character',
        });

        player2 = new Pokemon({
            ...getRandomPokemon(),
            selectors: 'enemy',
        });

        $elImgPlayer1.src = player1.img;
        $elImgPlayer2.src = player2.img;
    }
});

function randomDamage(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
