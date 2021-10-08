const btn = document.getElementById('generate');
const randomNum = document.getElementById('random-num');


btn.addEventListener('click', ()=> {
    let number = Math.random();
    randomNum.innerHTML = `${number}`;
})
