const botao = document.getElementById("gerar");

const lista = document.getElementById("lista");

botao.addEventListener("click", function() {
    
    lista.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");

        item.textContent = `Número é ${i}`;

        lista.appendChild(item);
    }
})