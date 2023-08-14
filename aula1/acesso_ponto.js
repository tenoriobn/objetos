const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1112223334455",
    email: "andre@dominio.com",
};

//Acessando a propriedade do objeto com ponto `.`
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

//Acessando a propriedade do objeto com ponto e mostrando somente os 3 primeiros caracteres com `substring`
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);