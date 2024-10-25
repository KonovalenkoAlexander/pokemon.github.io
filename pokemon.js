
export default class Pokemon {
    constructor({ name, hp, type, selectors }) {
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.selectors = selectors;

        this.elHP = document.getElementById(`health-${selectors}`);
        this.elProgressbar = document.getElementById(`progressbar-${selectors}`);
        this.renderHP();
    }

    changeHP = (count) => {
        this.hp.current -= count;
        if (this.hp.current <= 0) {
            this.hp.current = 0;
            alert(`${this.name} lost!`);
        }
        this.renderHP();
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife = () => {
        const { current, total } = this.hp;
        this.elHP.innerText = `${current} / ${total}`;
    }

    renderProgressbarHP = () => {
        const { current, total } = this.hp;
        const percentage = (current / total) * 100;
        this.elProgressbar.style.width = percentage + '%';
    }
}
