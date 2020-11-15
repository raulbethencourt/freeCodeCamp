const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "black", "rgba(123,142,200)"];
const bg = document.body;
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    //Get random number constant
    const nb = Math.round(Math.random() * colors.length);
    //console.log(nb);

    bg.style.background = colors[nb];
    color.innerHTML = colors[nb];
});