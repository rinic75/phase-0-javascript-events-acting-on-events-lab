// Your code here
const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = '#FF69B4';
const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10)

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10)
    if (left <= 360) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft()
    } else if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})

