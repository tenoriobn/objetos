const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1199999990"],
};

// Adicionando mais uma propriedade no objeto cliente, a chave endereco, terá como valor outro objeto
cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

// É possível acessar o objeto dentro do e para acessar o valor só fazer `cliente.endereco.rua`
console.log(cliente.endereco);

// Também é possível utilizando os colchetes
// console.log(cliente["endereco"])