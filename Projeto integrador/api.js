fetch("http://localhost:3000/api/personagens")
    .then(res => res.json())
    .then(dados => {

        console.log(dados);

        const lista = document.getElementById("lista-api");

        dados.forEach(personagem => {

            lista.innerHTML += `
                <div class="card">
                    <h3>${personagem.nome}</h3>
                    <p>${personagem.franquia}</p>
                    <p>${personagem.descricao}</p>
                </div>
            `;
        });

    })
    .catch(erro => {
        console.error(erro);
    });