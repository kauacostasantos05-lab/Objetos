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

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("endereco")){
    console.error("Erro. E necessario ter um enderoco cadastrado")
}