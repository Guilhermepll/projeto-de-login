function enviarinfo(){

    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    console.log(nome)
    console.log(email)
    console.log(senha)

    document.getElementById('name').value = ''
    document.getElementById('email').value =''
    document.getElementById('senha').value =''
}

    