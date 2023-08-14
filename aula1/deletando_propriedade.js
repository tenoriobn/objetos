const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

// Antes de deletar a propriedade que guarda a chave `aliado` e o valor.
console.log(objPersonagem);

// Deletando a chave `aliado` com delete.
delete objPersonagem.aliado;

// Depois de deletar a chave `aliado` junto com o valor.
console.log(objPersonagem);
console.log(objPersonagem.aliado);


// É possível deletar com colchetes também
// delete objPersonagem["status"];
// console.log(objPersonagem)