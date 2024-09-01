let numero = 0;

function adicionar() {
    let usuarioNome = document.getElementById('nome').value; //  Armazena o nome que foi colocado no input
    let usuarioFuncao = document.getElementById('funcao').value; // Armazena a funcao que foi colocada no input
    let numeroUsuarios = document.getElementById('numero-usuarios'); // Armazena o paragrafo com o total de usuarios
    let usuarios = document.getElementById('usuarios'); // Armazena o select
    let opcoes = document.createElement('option'); // Armazena um elemento HTML option
    let random = Math.floor(Math.random() * 100);  // Armazena um numero aleatorio de 1 a 100

    // Le todos os <OPTIONS> que estao dentro do <SELECT>
    for (let i = 0; i < usuarios.options.length; i++) { 

        // Verifica se o option tem o mesmo nome que o nome do input
        if (usuarios.options[i].value === usuarioNome) {
            Toastify({
                text: "O Usuário já existe na lista.",
                duration: 2000, // duração em milissegundos
                close: true, // mostra o botão de fechar
                gravity: "top", // "top" ou "bottom"
                position: "center", // "left", "center" ou "right"
                backgroundColor: "#ff4a4a", // cor de fundo
                stopOnFocus: true, // pausa o temporizador quando o toast está em foco
            }).showToast();
            return;
        }
    }

    // Veifica se o nome do usuario ou a funcao estao com caracteres dentro
    if (usuarioNome === '' || usuarioFuncao === '') {
        Toastify({
            text: "É necessário adicionar o nome e a função do usuário.",
            duration: 2000, // duração em milissegundos
            close: true, // mostra o botão de fechar
            gravity: "top", // "top" ou "bottom"
            position: "center", // "left", "center" ou "right"
            backgroundColor: "#ff4a4a", // cor de fundo
            stopOnFocus: true, // pausa o temporizador quando o toast está em foco
        }).showToast();
        return
    }

    opcoes.textContent = `${random}. ${usuarioNome} | Função: ${usuarioFuncao}`; // Coloca o texto do OPTION
    opcoes.value = usuarioNome; // Torna o option com o mesmo valor do input nome
    usuarios.appendChild(opcoes); // Coloca o OPCOES que armazena um elemento option dentro do elemento Select
    numero++;
    numeroUsuarios.innerText = "Número de Usuários: " + numero;

    document.getElementById('nome').value = ''; //Deixa os inputs vazios
    document.getElementById('funcao').value = '';
    
}

function remover() {
    let usuarioNome = document.getElementById('nome').value;  //  Armazena o nome que foi colocado no input
    let usuarios = document.getElementById('usuarios'); // Armazena o elemento select
    let numeroUsuarios = document.getElementById('numero-usuarios'); // paragrafo com numero de usuarios

    //verifica se o input ta vazio
    if (usuarioNome === '') {
        Toastify({
            text: "Por favor, insira um nome para ser excluido",
            duration: 2000, // duração em milissegundos
            close: true, // mostra o botão de fechar
            gravity: "top", // "top" ou "bottom"
            position: "center", // "left", "center" ou "right"
            backgroundColor: "#ff4a4a", // cor de fundo
            stopOnFocus: true, // pausa o temporizador quando o toast está em foco
        }).showToast();
        return
    }

    let opcoes = usuarios.getElementsByTagName('option'); // armazena o elemento optioon que ta dentro do select

    // le todos os elemento option e verifica se o valor do usuario é igual ao nome do input
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].value === usuarioNome) {
            usuarios.removeChild(opcoes[i]); // remove o input com o mesmo nome 
            numero--; 
            numeroUsuarios.innerText = "Número de Usuários: " + numero;


            document.getElementById('nome').value = ''; // coloca o input vazio
            return;
        }
    }

    Toastify({
        text: "Usuário não encontrado.",
        duration: 2000, // duração em milissegundos
        close: true, // mostra o botão de fechar
        gravity: "top", // "top" ou "bottom"
        position: "center", // "left", "center" ou "right"
        backgroundColor: "#ff4a4a", // cor de fundo
        stopOnFocus: true, // pausa o temporizador quando o toast está em foco
    }).showToast();
}

function pesquisar() {
    let usuarios = document.getElementById('usuarios'); // armazena o select
    let pesquisar = document.getElementById('pesquisar').value // armazena o texto inserido no input
    let usuarioPesquisado = document.getElementById('usuario-pesquisado') // armazena o paragrafo 
    usuarioPesquisado.innerText = '' 


    let usuarioEncontrado = false; // estado atual de encontrar usuario

    // le todos os options do usuarios e verifica se ele inclui o que tem na pesquisa
    for (let i = 0; i < usuarios.options.length; i++) { 
        if (usuarios.options[i].text.includes(pesquisar)) {
            usuarioPesquisado.innerText = usuarios.options[i].text;
            usuarioEncontrado = true
            break
        }
    }
    
        // se o pesquisar estiver vazio
    if (pesquisar === '') {
        Toastify({
            text: "Você deve pesquisar um usuário.",
            duration: 2000, // duração em milissegundos
            close: true, // mostra o botão de fechar
            gravity: "top", // "top" ou "bottom"
            position: "center", // "left", "center" ou "right"
            backgroundColor: "#ff4a4a", // cor de fundo
            stopOnFocus: true, // pausa o temporizador quando o toast está em foco
        }).showToast();
        return
    }

    // verifica se o numero é 0
    if (numero === 0) {
        Toastify({
            text: "Não há usuários na lista.",
            duration: 2000, // duração em milissegundos
            close: true, // mostra o botão de fechar
            gravity: "top", // "top" ou "bottom"
            position: "center", // "left", "center" ou "right"
            backgroundColor: "#ff4a4a", // cor de fundo
            stopOnFocus: true, // pausa o temporizador quando o toast está em foco
        }).showToast();
        return
    }

    // se o usuario for diferente de FALSE(JA INCLUSO NA LISTA)
    if (!usuarioEncontrado) {
        Toastify({
            text: "Você deve pesquisar um usuário existente na lista.",
            duration: 2500, // duração em milissegundos
            close: true, // mostra o botão de fechar
            gravity: "top", // "top" ou "bottom"
            position: "center", // "left", "center" ou "right"
            backgroundColor: "#ff4a4a", // cor de fundo
            stopOnFocus: true, // pausa o temporizador quando o toast está em foco
        }).showToast();
        return
    }

}




