const clientes = require("./clientes.json");

// Função que recebera a lista e a chave desse objeto
function ordenar(lista, propriedade) {
    // Variável que vai armazenar a lógica de ordenação da lista de objetos
    const resultado = lista.sort((a,b) => {

        // Condição do método `sort()` que faz com que os valores armazenado em `a` e `b`
        // Sejam subtraidos e se o número de `a` for menor que `b` a ordem é crescente
        // Se `b` for maior que `a` a ordem ficará decrescente.
        if (a[propriedade] > b[propriedade]) {
            return -1;
        }

        if (a[propriedade] < b[propriedade]) {
            return 1;
        }

        // Se na subtração o resultado for 0, a posição prevalece.
        return 0;
    })

    // retorna o resultado para a variável
    return resultado;
}

// Chamando a função, passando a lista `clientes` e a propriedade/chave `nome` para ordenar pelo nome 
const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);