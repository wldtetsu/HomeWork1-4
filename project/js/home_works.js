// GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')  

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
         gmailResult.innerHTML = 'NOT OK'
         gmailResult.style.color = 'red'
    }
}


// MOVE BLOCK

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
let direction = 'right';

const moveBlockInfinite = () => {
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
    const blockWidth = childBlock.offsetWidth;
    const blockHeight = childBlock.offsetHeight;

    if (direction === 'right') {
        if (positionX < parentWidth - blockWidth) {
            positionX++;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (positionY < parentHeight - blockHeight) {
            positionY++;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--;
        } else {
            direction = 'right';
        }
    }

    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    requestAnimationFrame(moveBlockInfinite);
};

moveBlockInfinite();

//TIME BLOCK


let counter = 0;
let timerId = null;

const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const updateDisplay = () => {
    secondsDisplay.textContent = counter;
};

const startTimer = () => {
    if (timerId === null) {
        timerId = setInterval(() => {
            counter++;
            updateDisplay();
        }, 1000);
    }
};

const stopTimer = () => {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
};

const resetTimer = () => {
    stopTimer();
    counter = 0;
    updateDisplay();
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
