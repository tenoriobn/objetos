const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1112223334455",
    email: "andre@dominio.com",
};

// Acessando propriedade do objeto com colchete `[]`.
// É necessário tornar as chaves em string "Nome"  "idade"  etc.
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente["cpf"].substring(0, 3)}`);

// Acessar propriedades com colchetes pode ser útil quando só se tem as chaves, como abaixo:
const chaves = ["nome", "idade", "cpf", "email"];

// Dai podemos com as chaves, acessar o objeto e obter o valor da chave.
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});