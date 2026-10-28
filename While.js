const botao = document.getElementById("contar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
    let numero = Number(document.getElementById("numero").value);

    let texto = "";

    if(!Number.isInteger(numero) || numero < 1 || numero > 20) { 
        resultado.textContent = "Digite um número inteiro entre 1 e 20.";

        return
    }

    while (numero > 0) {
        texto += numero + " ";
        numero --;
    }

    texto += "Fim";

    resultado.textContent = texto;
})