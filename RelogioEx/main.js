function relogio(){

    function seconds(sec){
        const data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC'});
    }

    const selTimer = document.querySelector('.relogio');
    let seg = 0;
    let timer;

    function inicio(){
        timer = setInterval(function(){
            seg++;
            selTimer.innerHTML = seconds(seg);}, 1000);
    }

    document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('zerar')){
            clearInterval(timer);
            selTimer.innerHTML = '00:00:00';
            selTimer.classList.remove('pausado');
            seg = 0;
        }

        if(el.classList.contains('iniciar')){
            selTimer.classList.remove('pausado');
            clearInterval(timer);
            inicio();
    
        }

        if(el.classList.contains('pausar')){
            selTimer.classList.add('pausado');
            clearInterval(timer);

        }

    });
}
relogio();




















