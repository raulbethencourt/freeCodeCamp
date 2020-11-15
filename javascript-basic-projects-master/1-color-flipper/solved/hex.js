const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const bg = document.body;
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 1; i < 7; i++) {
        //Get random number 
        const nb = Math.round(Math.random() * (hex.length - 1));
        hexColor += hex[nb];
    }
    //console.log(hexColor);

    bg.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
});