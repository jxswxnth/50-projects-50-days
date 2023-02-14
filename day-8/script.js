const labels = document.querySelectorAll('label');

labels.forEach(label=>{
    label.innerHTML = label.innerText.split('').map((letter, i)=> `<span style='transition-delay: ${i*50}ms'>${letter}</span>`).join('');
})