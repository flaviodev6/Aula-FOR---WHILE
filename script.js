const botao = document.getElementById("executar");
const resultado = document.getElementById("resultado");
const saldoTela = document.getElementById("saldo");

let saldo = 1000;
let historico = [];

historico.push("Abertura da conta: R$ " + saldo + ",00");
saldoTela.textContent = "R$ " + saldo + ",00";

botao.addEventListener("click", function () {
    let operacao = document.getElementById("operacao").value;
    let valorTexto = document.getElementById("valor").value;
    let valor = Number(valorTexto);

    let texto = "";

    switch (operacao) {

        case "saldo":
            texto = "Saldo atual: R$ " + saldo + ",00";
            break;

        case "depositar":
            if (valorTexto == "") {
                texto = "Erro: informe um valor.";
            } else if (!Number.isInteger(valor) || valor <= 0) {
                texto = "Erro: o valor deve ser um número inteiro maior que zero.";
            } else {
                saldo = saldo + valor;
                historico.push("Depósito: +R$ " + valor + ",00");

                texto = "Depósito de R$ " + valor + ",00 realizado com sucesso!\n";
                texto += "Novo saldo: R$ " + saldo + ",00";
            }
            break;

        case "sacar":
            if (valorTexto == "") {
                texto = "Erro: informe um valor.";
            } else if (!Number.isInteger(valor) || valor <= 0) {
                texto = "Erro: o valor deve ser um número inteiro maior que zero.";
            } else if (valor % 10 != 0) {
                texto = "Erro: o valor do saque deve ser múltiplo de 10.";
            } else if (valor > saldo) {
                texto = "Erro: saldo insuficiente.";
            } else {
                let restante = valor;
                let notas100 = 0;
                let notas50 = 0;
                let notas20 = 0;
                let notas10 = 0;

                while (restante >= 100) {
                    restante = restante - 100;
                    notas100 = notas100 + 1;
                }

                while (restante >= 50) {
                    restante = restante - 50;
                    notas50 = notas50 + 1;
                }

                while (restante >= 20) {
                    restante = restante - 20;
                    notas20 = notas20 + 1;
                }

                while (restante >= 10) {
                    restante = restante - 10;
                    notas10 = notas10 + 1;
                }

                saldo = saldo - valor;
                historico.push("Saque: -R$ " + valor + ",00");

                texto = "Saque de R$ " + valor + ",00 realizado com sucesso!\n\n";
                texto += "Notas entregues:\n";
                texto += notas100 + " nota(s) de R$ 100\n";
                texto += notas50 + " nota(s) de R$ 50\n";
                texto += notas20 + " nota(s) de R$ 20\n";
                texto += notas10 + " nota(s) de R$ 10\n\n";
                texto += "Saldo restante: R$ " + saldo + ",00";
            }
            break;

        case "extrato":
            texto = "EXTRATO\n";

            for (let i = 0; i < historico.length; i = i + 1) {
                texto += (i + 1) + ". " + historico[i] + "\n";
            }

            texto += "\nSaldo atual: R$ " + saldo + ",00";
            break;
    }

    resultado.textContent = texto;
    saldoTela.textContent = "R$ " + saldo + ",00";
});
