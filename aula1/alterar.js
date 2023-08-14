const pessoa = {
    nome: "Luma",
    profissao: "Engenheira"
}

console.log(pessoa.nome);

// Não tem efeito hosting, então chave `telefone` não existe, portanto, undefined.
console.log(pessoa.telefone);

// Criando chave e valor para objeto já existente, sendo assim, criando uma nova propriedade.
pessoa.telefone = "11 222333444";

// Agora irá retornar o valor da chave telefone, pois foi chamado depois de criar.
console.log(pessoa.telefone);

// Aqui estamos manipulando o valor da chave `nome`.
// Isso não é uma reatribuição que com `const` não pode, somente `let` ou `var`, trata-se de manipulação.
pessoa.nome = "Luma Silva";

// Se chamar agora, a chave `nome` irá mostrar o `valor` atualizado.
console.log(pessoa)