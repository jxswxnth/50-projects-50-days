const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++
        circles[currentActive - 1].classList.add('active')
    }
    update()
})

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        circles[currentActive - 1].classList.remove('active')
        currentActive--
    }
    update()
})

function update() {
    let bar = ((currentActive - 1) / (circles.length - 1))*100
    progress.style.width = bar + '%';
    if (currentActive > 1) {
        prev.disabled = false;
        if (currentActive === circles.length) {
            next.disabled = true;
        } else {
            next.disabled = false;
        }
    } else {
        prev.disabled = true;
    }
}
