const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "114444440"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.save){
            console.log("Saldo Insuficiente");
        }
    }
};