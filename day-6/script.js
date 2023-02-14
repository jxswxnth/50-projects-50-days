const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = 4 * window.innerHeight / 5

    boxes.forEach((box) => {

        const boxTop = box.getBoundingClientRect().top;
        console.log(box, boxTop)
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}