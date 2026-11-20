const botoesMostrarSenha = document.querySelectorAll('.mostrar-senha');
botoesMostrarSenha.forEach((botao) => {
    botao.addEventListener('click', () => {
        const campoSenha = botao.parentElement.querySelector('input');

        if (campoSenha.type === 'password') {
            campoSenha.type = 'text';
            botao.setAttribute('aria-label', 'Ocultar senha');
        } else {
            campoSenha.type = 'password';
            botao.setAttribute('aria-label', 'Mostrar senha');
        }
    });
});