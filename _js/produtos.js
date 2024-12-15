function inputNome() {
    var comprimentoNome = document.getElementById('nome').value

    var nomeRegex = /^([a-zA-Z]?\s??[a-zA-Z]?){0,}$/

    if (!nomeRegex.test(comprimentoNome) || (comprimentoNome.length) < 3) {
        document.getElementById('nome').style.border = '2px solid #e63636'
        document.getElementById('avisoNome').style.display = 'block'
        document.getElementById('avisoNome').style.marginTop = '-0.5vh'
        // Caso as informações não estejam cumprindo com o Regex, a borda do input fica vermelha
        // O span avisando que algo está errado aparece, também em vermelho, e diminuimos um pouco a margem do topo dele
        // Com intuito de ocupar menos espaço e ficar mais próximo do input, o mesmo acontece para as outras funções de Regex
    }
    else {
        document.getElementById('nome').style.border = '1px solid #181818'
        document.getElementById('avisoNome').style.display = 'none'
    }
}

function inputEmail() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email').style.border = '2px solid #e63636'
        document.getElementById('avisoEmail').style.display = 'block'
        document.getElementById('avisoEmail').style.marginTop = '-0.5vh'
    }
    else{
        document.getElementById('email').style.border = '1px solid #181818'
        document.getElementById('avisoEmail').style.display = 'none'
    }
}

function inputTelefone() {
    var telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

    if (!telefoneRegex.test(document.getElementById('telefone').value)) {
        document.getElementById('telefone').style.border = '2px solid #e63636'
        document.getElementById('avisoTelefone').style.display = 'block'
        document.getElementById('avisoTelefone').style.marginTop = '-0.5vh'
    }
    else{
        document.getElementById('telefone').style.border = '1px solid #181818'
        document.getElementById('avisoTelefone').style.display = 'none'
    }
}

function fecharFaleConosco(){
    document.getElementById('caixa-fale-conosco').style.display = 'none'
}

function abrirFaleConosco(){
    document.getElementById('caixa-fale-conosco').style.display = 'flex'
}

function gerarJson(){
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var telefone = document.getElementById('telefone').value
    var mensagem = document.getElementById('mensagem').value

    var informacoes = {}
    // Criando uma variável de json para armazenamento em JavaScript vazia, para adicionar conteúdo posteriormente

    informacoes["Nome"] = nome
    informacoes["E-mail"] = email
    informacoes["Telefone"] = telefone
    informacoes["Mensagem"] = mensagem
    // Inserindo as informações recebidas dos inputs em json de JavaScript

    var json = JSON.stringify(informacoes, null, 2)
    // Transformando as informações recebidas em json de um .json

    var link = document.createElement('a');
    // 'a' dentro de crateElement, pois estamos criando um LINK temporário, e a tag de link é 'a'

    link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);
    // data:text/json para identificar que é uma URL de data, charset=utf-8 para garantir que não terá problemas com caracteres especiais
    // encodeURIComponent codifica o conteúdo da nossa variável de informações para caracteres como {}, :, ',' e espaços não causem problemas

    link.download = 'dados.json';
    // Faz o download de um arquivo .json com o nome 'dados' que possui o conteúdo da nossa variável informações

    link.click();
    // Simula o clique para realizar o download do arquivo .json
}