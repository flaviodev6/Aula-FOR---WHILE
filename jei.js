const botao = document.getElementById("gerar");

const lista = document.getElementById("lista");

const numero = document.getElementById("NumeroT");

botao.addEventListener("click", function() {
    
    lista.innerHTML = "";

    const numero = Number(NumeroT.value);

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");

        const resultado = numero * i;

        item.textContent = `${numero} x ${i} = ${resultado}`;

        lista.appendChild(item);
    }
})