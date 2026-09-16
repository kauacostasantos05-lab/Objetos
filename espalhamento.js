const cliente = {
    nome: "bemdobemparaobem",
    idade: 17,
    email: "bemdobemparaobem@bem.com",
    telefone: ["115555550", "114444440"],
};

cliente.enderecos = [
    {
    Rua: "R. Jose Climber",
    numero: 123,
    apartamento: true,
    complemento : "ap 934",
},
];

function ligaParaCliente(telefoneComercial,telefoneResidencial) {
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],

};

console.log(encomenda);

