let kolory = {
    '#17484f': 'first',
    '#a77d46': 'second',
    '#955d30': 'third',
    '#8cb9c7': 'fourth',
    '#558897': 'fifth'
}

let activeClass = '';

const clearBtn = document.getElementById('clear');
const btns = document.querySelectorAll('.btn');

for (let btn of btns) {
    btn.style.backgroundColor = btn.value;
}

document.body.addEventListener('click', (e) => {
    changeColor(e);
}, false);

clearBtn.addEventListener('click', clearAll, false);

document.body.addEventListener('click', (e) => {
    switchColor(e);
}, false)

function changeColor(e) {
    let el = e.target;
    if (el.tagName === 'TD' && (el.classList.length < 1 || el.classList.contains(`${activeClass}`))) {
        el.classList.toggle(`${activeClass}`);
    } else {
        return;
    }
}

function switchColor(e) {
    let el = e.target;
    if (el.tagName === 'BUTTON' && !el.classList.contains('d')) {
        activeClass = kolory[el.value];
        for (let btn of btns) {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
            }
        }
        el.classList.toggle('active');
    } else {
        return;
    }
}

function clearAll() {
    let td = document.querySelectorAll('td');
    for (let i = 0; i < td.length; i++) {
        td[i].classList = '';
    }
}
