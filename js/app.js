

let text = document.querySelector('h2');
let word = document.getElementsByTagName('span');
let i = 0;

const rotator = () => {
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}

setInterval(rotator, 800);