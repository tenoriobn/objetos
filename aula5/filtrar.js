const clientes = require("./clientes.json");

// Função que vai receber como parâmetro a lista que será filtrada
function filtrarApartamentoSemComplemento(clientes) {
    // Método `filter()` que vai pegar cada objeto que será denominado como `cliente`
    return clientes.filter((cliente) => {
        // Aqui será retornado os objetos que contém a chave `apartamento`
        // Mas que não contém o complemento, utilizando o método de objeto `hasOwnProperty()`
        // Esse método verifica se existe o `complemento` dentro de `endereco`.
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
};

// Passando a lista de objetos para a função
const filtrados = filtrarApartamentoSemComplemento(clientes);

// Imprimindo os objetos filtrados
console.log(filtrados);