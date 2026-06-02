document.addEventListener("DOMContentLoaded", function () {

    const campoBusca = document.getElementById("campo-busca");
    const botaoBusca = document.getElementById("btn-busca");
    const resultadoBusca = document.getElementById("resultado-busca");

    if (!campoBusca) return;

    const blocosConteudo = document.querySelectorAll(".alvo-busca");
    const textosOriginais = [];

    blocosConteudo.forEach((bloco, index) => {
        textosOriginais[index] = bloco.innerHTML;
    });

    function realizarBusca() {

        const termoBusca = campoBusca.value.trim();

        let totalResultados = 0;
        let primeiroResultado = null;

        blocosConteudo.forEach((bloco, index) => {

            bloco.innerHTML = textosOriginais[index];

            if (termoBusca === "") return;

            const encontrados = destacarTexto(bloco, termoBusca);

            totalResultados += encontrados;

            if (!primeiroResultado) {
                primeiroResultado =
                    bloco.querySelector(".destaque-busca");
            }
        });

        if (termoBusca === "") {
            resultadoBusca.textContent = "";
            return;
        }

        resultadoBusca.textContent =
            totalResultados + " resultado(s) encontrado(s).";

        if (primeiroResultado) {
            primeiroResultado.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }

    campoBusca.addEventListener("input", realizarBusca);

    if (botaoBusca) {
        botaoBusca.addEventListener("click", realizarBusca);
    }

    function destacarTexto(elemento, termo) {

        let contador = 0;

        const regex = new RegExp(
            `(${escapeRegex(termo)})`,
            "gi"
        );

        percorrerNos(elemento);

        return contador;

        function percorrerNos(no) {

            if (no.nodeType === Node.TEXT_NODE) {

                const texto = no.textContent;

                const ocorrencias =
                    texto.match(regex);

                if (ocorrencias) {

                    contador += ocorrencias.length;

                    const span = document.createElement("span");

                    span.innerHTML = texto.replace(
                        regex,
                        '<mark class="destaque-busca">$1</mark>'
                    );

                    no.parentNode.replaceChild(span, no);
                }

            } else {

                Array.from(no.childNodes)
                    .forEach(percorrerNos);
            }
        }
    }

    function escapeRegex(texto) {
        return texto.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );
    }

});