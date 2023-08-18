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

// O `Object.keys` vai ajudar a lidar com o objeto `cliente` para posteriormente checar se tem endereço.
const chavesDoObjeto = Object.keys(cliente);

// Vai imprimir as propriedades.
console.log(chavesDoObjeto);

// Vai exibir mensagem de erro, cada não existe a chave `enderecos`.
if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
};