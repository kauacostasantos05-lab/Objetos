const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "114444440"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo){
            console.log("Saldo Insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`pagamento efetuado. Novo saldo: ${this.saldo}`);
        }
    },
};
cliente.efetuaPagamento(250);
