// Carregando lista de objetos no arquivo json com `require`.
const clientes = require("./clientes.json");

// Função que recebe 3 parâmetros, sendo a lista de objetos, a chave e o valor dessa chave
function encontrar(lista, chave, valor) {
    // Foi utilizado o método `.find()` que retorna o primeiro item correspondente ao que foi buscado
    // Ou seja, o primeiro item que der `true` será considerado o que procuramos e será retornado.
    return lista.find((item) => item[chave].includes(valor));
}

// Aqui estamos armazenando a chamada da função na variável para depois imprimir com mais facilidade
// clientes represente a `lista`, enquanto chave é `nome` e o valor é `Kirby`.
const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado)

// Também é possível encontrar outras coisas, como número do telefone
// Por se tratar de uma lista com dois números pode retornar undefined com a comparação a cima
// Isso porque `item[chave]` será uma string e o `valor` será uma array com duas strings
// Então podemos utilizar o método `includes()` item[chave].includes(valor);

const encontrado2 = encontrar(clientes, "telefone", "1918820860");
console.log(encontrado2)