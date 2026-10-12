
let agendamento = JSON.parse(localStorage.getItem("agendamento")) || [];
document.addEventListener("DOMContentLoaded", renderizarlista);

function renderizarlista() {  
    const lista = document.getElementById("agendamentos-anteriores");


    /* quando não houver agendamento, exibe uma mensagem  que esta no <p> */
    if (agendamento.length === 0) {
        lista.innerHTML = "<p>nenhum agendamento realizado</p>";

        return;
    }


    const ordenado = agendamento.sort((a, b) => new Date(a.data) - new Date(b.data));

    lista.innerHTML = "";

    ordenado.forEach(item => {
        // cria uma div para cada agendamento no html
        const card = document.createElement("div");
        card.classList.add("card-historico"); // Classe pra css ai

        // cria outras divs pra colocar os valores nome data e etc.
        card.innerHTML = `
            <p><strong>Nome:</strong> ${item.nome}</p>
            <p><strong>Data:</strong> ${item.data}</p>
            <p><strong>Horário:</strong> ${item.horario || item.hora}</p>
            <hr>
        `;

        // 4. Coloca o bloco na tela dentro da sua div "lista-agendamento
        lista.appendChild(card);
    });






}
