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

// Função vai receber dois números e ligar para esses dois números contidos em um objeto
function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

// Em vez de fazer:
// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

// Podemos fazer utilizando o spread operator `...` antes do objeto que acessa a propriedade.
// Então aqui irá pegar os dois números de forma menos verbosa;
ligaParaCliente(...cliente.telefone);


// É possível fazer também com objetos e não só com listas.
const encomenda = {
    destinatario: cliente.nome,

    // Em vez de acessar `enderecos` toda vez que queremos pegar uma propriedade dentro dele
    // rua: cliente.enderecos[0].rua,
    // numero: cliente.enderecos[0].numero,

    // Podemos fazer dessa forma que é mais simples, utilizando o spread operator
    // E dizendo que queremos o `enderecos[0]`, ou seja, as propriedades dentro do `endereco`
    ...cliente.enderecos[0],
};

console.log(encomenda);