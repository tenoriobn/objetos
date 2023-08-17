const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1199999990"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// Aqui utilizamos o método for() com a palavra `in`
// Dessa forma, pegaremos todas as propriedades, mesmo sem saber a chave de todas as propriedades
// Então quero pegar a chave de cliente, representado por `chave in cliente`
// Então em um console.log(chave), obteremos as chaves de cada propriedade `nome, idade e etc...`.
for (let chave in cliente) {
    // Aqui ao fazer `cliente[chave]` iremos obter o valor de cada chave/propriedade.
    // Aqui com o `typeof` estpi verificando o tipo de cada chave.
    let tipo = typeof cliente[chave];

    // Aqui estamos pegando a variavel `tipo` que contém o tipo de cada chave
    // Como temos um objeto dentro de outro objeto que retorna [object object], então não queremos imprimir esse
    // Para não imprimir os tipos function e object está sendo feito a condição que irá filtrar
    if (tipo !== "object" && tipo !== "function") {
        // Aqui irá imprimir os tipos válidos, no caso, o que não é tipo object ou function.
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}