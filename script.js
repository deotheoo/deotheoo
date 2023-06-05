const toggle = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-lightbulb-fill');
    if(this.classList.toggle('bi-lightbulb')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
});