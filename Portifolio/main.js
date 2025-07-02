
// Função para adicionar evento de clique a um botão
function adicionarEventoClique(idBotao, link) {
    const botao = document.querySelector(idBotao);
    if (botao) {
        botao.addEventListener('click', () => window.location.href = link);
    }
}

// Adicionando eventos de clique aos botões dos repositórios
adicionarEventoClique('#botaoRepositoriop1', 'https://github.com/Marcus-xpl/Calculadora');
adicionarEventoClique('#botaoRepositoriop2', 'https://github.com/Marcus-xpl/Controle-de-Encomendas');
adicionarEventoClique('#botaoRepositoriop3', 'https://github.com/Marcus-xpl/Relogio');

//    Função da apresentação titulo --------------------------------------------------------


// O elemento HTML onde o texto será exibido,  O conteúdo que será digitado, A velocidade da digitação (em milissegundos).
function digitarTexto(elemento, texto, velocidade = 100) {
    let index = 0;  // index para acompanhar a posição da letra que está sendo adicionada ao texto.

    elemento.innerHTML = ""; // Antes de iniciar a digitação, garantimos que o elemento está vazio.

    function escrever() {

       // index for menor que o número total de caracteres do texto, continuamos a digitação.
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);   // método .charAt(index) para pegar a letra correspondente à posição index no texto.
            index++;   // Depois disso, aumentamos index para que na próxima execução peguemos a próxima letra.
            setTimeout(escrever, velocidade);   // usamos setTimeout() para esperar um certo tempo antes de chamar a função escrever novamente.
        }
    }

    escrever();   // Chamamos a função escrever() para começar a digitação.
}

// Agora precisamos garantir que a função seja executada quando a página terminar de carregar. Para isso, usamos DOMContentLoaded.
document.addEventListener("DOMContentLoaded", function () {
    const subtitulo = document.querySelector(".apresentacao__subtitulo");  // 
    if (subtitulo) {
        digitarTexto(subtitulo, "Desenvolvedor Front-end | HTML | CSS | JavaScript.", 85);
    }
});

