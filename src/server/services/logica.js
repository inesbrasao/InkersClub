// Função que busca aleatoriamente artistas da base de dados.
//let bancoDados = [{}]
//let arrayAleatorio = new Array.fill(20)[random(1, bancoDados.length)]
//let array = arrayAleatorio.map(el => bancoDados[el]) depois aceder a .image[0]

// Busca base de dados total
// Selecciona indices aleatorios da base

// Função que calcula as tags mais populares (com maior nr na base de dados).

// Função que determina se já existe pasta com nome de artista ou, senão, cria uma. 



//Login - Função que testa se email e password existem, e se correspondem. 

// function validateEmail(email) {
//     const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return EMAIL_REGEX.test(email)
// }

// function checkPasswordStrength(password) {
//     if (password.length < 8) return 0;
//     const regexes = [
//         /[a-z]/,
//         /[A-Z]/,
//         /[0-9]/,
//         /[~!@#$%^&*)(+=._-]/
//     ]
//     return regexes
//         .map(re => re.test(password))
//         .reduce((score, t) => t ? score + 1 : score, 0)
// }

// const loginCredentials = [{}]
// const tokens = []



// function findErrors({ email, password, passwordConf }) {
//     const errors = {}
//     if ( email == undefined || email == '') {
//         errors.email = "Por favor introduza o seu endereço de email."
//     } else if (!validateEmail(email)) {
//         errors.email = "Por favor introduza um endereço de email válido."
//     } else if (loginCredentials.some(loginCredential => loginCredential.email === email)) {
//         errors.email = "O endereço introduzido já está registado."
//     }

//     if (password == undefined || password == '') {
//         console.log(password)
//         errors.password = "Por favor introduza a sua password."
//     } else if (password.length < 8) {
//         errors.password = "A sua password deve ter no mínimo 8 caracteres."
//     } else if (checkPasswordStrength < 4) {
//         errors.password = "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo."
//     } 
    
//     if (passwordConf == '' || passwordConf == undefined) {
//         errors.passwordConf = "Por favor introduza novamente a sua password."
//     } else if (password !== passwordConf) {
//         errors.passwordConf = "As passwords não coincidem."
//     }
//     return errors
// }