// Aqui é mostrado como utilizar `métodos/funções` dentro de um objeto
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1199999990"],
    saldo: 200,

    // Criando a chave `efetuaPagamento` que recebe como valor uma `function`
    // O parâmetro `valor` guardara o valor passado como argumento na chamada da função
    efetuaPagamento: function (valor) {
        // Se o valor for mais que o saldo, é apresentado uma mensagem de erro
        // É utilizado o `this.` para acessar a chave `saldo` antes da função
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");

        // Se o saldo for maior que valor é realizado a subtração do valor no saldo.
        // Além disso exibe uma mensagem contendo o novo valor
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

// Chamada da `função/método` passando como argumento que o valor será 25
// Será imprimido que o pagamento foi realizado e o novo saldo que será 175.
cliente.efetuaPagamento(25);