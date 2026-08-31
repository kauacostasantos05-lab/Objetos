const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
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
cliente.enderecos.push({
    rua: "R. Jose climber",
    numero: 404,
    apartamento: false
});

console.log(cliente.enderecos);