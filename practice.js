
const screen = document.querySelector('.screen');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

const buttons = document.getElementsByClassName('btn');
for (const btn of buttons) {
    btn.addEventListener('click', function (event) {
        screen.value += (event.target.innerText);
    })
}
btnClear.addEventListener('click', function () {
    screen.value = '';
})
btnEqual.addEventListener('click', function () {
    let result = eval(screen.value);
    screen.value = result;
})

