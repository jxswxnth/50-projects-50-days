const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        const classes = [...panel.classList];
        if (classes.includes("active")) {
            panel.classList.remove('active')
        }
    })
}
