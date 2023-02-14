const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

window.onload = function() {
    let loadValue = 0;
    setInterval(()=>{
        if(loadValue!==100){
            loadValue++
            loadingText.innerText = loadValue + '%'
            loadingText.style.opacity = 2/loadValue;
            bg.style.filter =  `blur(${30-(0.3*loadValue)}px)`;
        }
    }, 30)
}


