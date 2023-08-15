// É possível criar uma chave que terá como valor uma array, como no caso de dois telefones para uma chave:

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1199999990"],
};

console.log(cliente.telefone);