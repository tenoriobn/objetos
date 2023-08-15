const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1199999990"],
};

// Podemos criar uma lista de objetos, como no exemplo abaixo:
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// Como é uma lista, utilizando o .push() para colocar um novo objeto na lista
cliente.enderecos.push({
    rua: "R. Joseph Ledder",
    numero: 404,
    apertamento: false,
});

// Além disso, com isso podemos utilizar o método .filter()
// Assim, podemos filtrar os endereços que são apartamento, no caso contém `true`
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

// Ao imprimir vai exibir somente o endereço de apartamento.
console.log(listaApenasApartamentos);