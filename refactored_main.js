
// Покемоны с использованием классов
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }

    attack() {
        return Math.floor(Math.random() * 10) + 5;
    }

    specialAttack() {
        return Math.floor(Math.random() * 20) + 10;
    }

    updateHealthBar(healthElement) {
        healthElement.style.width = this.health + '%';
        if (this.health <= 0) {
            this.health = 0;
            alert(this.name + ' has fainted!');
        }
    }

    resetPokeball() {
        const pokeball = document.getElementById('pokeball');
        pokeball.style.visibility = 'hidden';
        pokeball.style.top = '50%';  // Возвращаем в центральное положение
    }
}

const pikachu = new Character('Pikachu');
const charmander = new Character('Charmander');

// Флаг для предотвращения повторной атаки во время анимации
let isAttacking = false;

// Пример использования обновления прогрессбара
function updateHealthBar(pokemon, healthElement) {
    pokemon.updateHealthBar(healthElement);
}

// Функция для сброса покебола в исходное положение
function resetPokeball() {
    pikachu.resetPokeball();
}
