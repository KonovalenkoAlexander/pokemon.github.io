
import Pokemon from './pokemon.js';

const player1 = new Pokemon({
    name: 'Pikachu',
    hp: 100,
    type: 'electric',
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    hp: 100,
    type: 'fire',
    selectors: 'enemy',
});

document.getElementById('btn-kick').addEventListener('click', () => {
    player1.changeHP(randomDamage(10, 20));
    player2.changeHP(randomDamage(10, 20));
});

function randomDamage(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
