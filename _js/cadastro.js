function inputNome() {
    var comprimentoNome = document.getElementById('nome').value

    var nomeRegex = /^([a-zA-Z]?\s??[a-zA-Z]?){0,}$/

    if (!nomeRegex.test(comprimentoNome) || (comprimentoNome.length) < 3) {
        document.getElementById('nome').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoNome').style.display = 'block'
        document.getElementById('avisoNome').style.marginTop = '-1vh'
    }
    else {
        document.getElementById('nome').style.border = 'none'
        document.getElementById('avisoNome').style.display = 'none'
    }
}

function inputEmail() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoEmail').style.display = 'block'
        document.getElementById('avisoEmail').style.marginTop = '-1vh'
    }
    else{
        document.getElementById('email').style.border = 'none'
        document.getElementById('avisoEmail').style.display = 'none'
    }
}

function inputSenha() {
    var senha = document.getElementById('senha').value
    var avisoSenha = document.getElementById('avisoSenha')

    if (senha.length < 8) {
        avisoSenha.textContent = "A senha deve conter pelo menos 8 caracteres."
        document.getElementById('senha').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
        document.getElementById('avisoSenha').style.marginTop = '-1vh'
    }
    else if (!/[A-Z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra maiúscula."
        document.getElementById('senha').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
        document.getElementById('avisoSenha').style.marginTop = '-1vh'
    }
    else if (!/[a-z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra minúscula."
        document.getElementById('senha').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
        document.getElementById('avisoSenha').style.marginTop = '-1vh'
    }
    else if (!/[0-9]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 número."
        document.getElementById('senha').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
        document.getElementById('avisoSenha').style.marginTop = '-1vh'
    }
    else if (!/[#@$!%*?&]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 caractere especial (@, $, !, %, *, ?, &)"
        document.getElementById('senha').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
        document.getElementById('avisoSenha').style.marginTop = '-1vh'
    }
    else {
        document.getElementById('senha').style.border = 'none'
        document.getElementById('avisoSenha').style.display = 'none'
    }
}

function confirmaSenha() {
    var senha = document.getElementById('senha').value
    var senha2 = document.getElementById('senha2').value

    if (senha == senha2) {
        document.getElementById('senha2').style.border = 'none'
        document.getElementById('avisoSenha2').style.display = 'none' 
    }
    else {
        document.getElementById('senha2').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoSenha2').style.display = 'block'
        document.getElementById('avisoSenha2').style.marginTop = '-1vh'
    }
}

function inputTelefone() {
    var telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

    if (!telefoneRegex.test(document.getElementById('telefone').value)) {
        document.getElementById('telefone').style.border = '0.3vh solid #e63636'
        document.getElementById('avisoTelefone').style.display = 'block'
        document.getElementById('avisoTelefone').style.marginTop = '-1vh'
    }
    else{
        document.getElementById('telefone').style.border = 'none'
        document.getElementById('avisoTelefone').style.display = 'none'
    }
}