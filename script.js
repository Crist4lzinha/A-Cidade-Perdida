const Avança = document.querySelectorAll('.btn-proximo');

avança.Array.array.forEach(button => {
    button.andEventlistener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'Passo-'+this.getAttribute('data-proximo')

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo')
    })
});