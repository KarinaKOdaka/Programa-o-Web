const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function mostrarTarefas() {
    lista.innerHTML = "";
    tarefas.forEach(function(tarefa, index) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${tarefa.texto}</span>
            <button data-index="${index}">X</button>
        `;
        li.dataset.index = index;
        if (tarefa.concluida) {
            li.classList.add("concluida");
        }
        lista.appendChild(li);
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (input.value.trim() !== "") {
        tarefas.push({
            texto: input.value,
            concluida: false
        });
        mostrarTarefas();
        input.value = "";
    }
});

lista.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const index = event.target.dataset.index;
        tarefas.splice(index, 1);
        mostrarTarefas();
        return;
    }

    const li = event.target.parentElement;

    if (li) {
        const index = li.dataset.index;
        tarefas[index].concluida =
            !tarefas[index].concluida;
        mostrarTarefas();
    }
});

busca.addEventListener("input", function() {
    const textoBusca = busca.value.toLowerCase();
    const itens = lista.querySelectorAll("li");
    itens.forEach(function(item) {
        const texto = item.querySelector("span")
            .textContent
            .toLowerCase();
        if (texto.includes(textoBusca)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
});
mostrarTarefas();