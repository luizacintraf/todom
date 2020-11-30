// Capturar os elementos da página em constantes:

const tfEmail = document.getElementById("email")
const tfSenha = document.getElementById("senha")
const btLogin = document.getElementById("btnLogin")

//Função login que submeta uma string json na forma {email:   , senha:   } via post para a rota "/login"

const login = (email, senha) => {

    //construir a string json a ser enviada
    let strJson = JSON.stringify({
        email: email,
        senha: senha
    })

    // Enviar requisição
    fetch("/login", {
        method: "POST",
        body: strJson,
        headers: {
            "content-type": "application/json"
        }
    })

}

// associar a função login ao clickar no botão logar
btLogin.addEventListener("click",
    (ev) => {
        ev.preventDefault()
        login(tfEmail.nodeValue, tfSenha.value)
    })