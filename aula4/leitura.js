const dados = require("./cliente.json");

// Aqui vai mostrar as propriedades do objeto
console.log(dados);
// Aqui irá mostrar que o arquivo `json` armazenado em dados é um objeto
console.log(typeof dados);

// Transformando o objeto no tipo String
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);

// Conferindo se agora trata-se do tipo string
console.log(typeof clienteEmString);
// Conferindo erro se tentar acessar o tipo stringo como é feito no tipo objeto
console.log(clienteEmString.nome);

// Transformando o json tipo String em tipo Objeto para poder utilizar as propriedades.
const objetoCliente = JSON.parse(clienteEmString)
// Vai mostrar objetoCliente como objeto.
console.log(objetoCliente);
