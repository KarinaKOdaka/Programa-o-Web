const inputPoke = document.querySelector('#inputPoke');
const btnBuscar = document.querySelector('#btnBuscar');
const btnAnterior = document.querySelector('#btnAnterior');
const btnProximo = document.querySelector('#btnProximo');
const display = document.querySelector('#display');

let pokemonAtualId = 1;

// Função principal de busca
async function buscarPokemon(identificador) {
    const busca = identificador || inputPoke.value.toLowerCase().trim();
    
    if (!busca) return;

    // Estado de Carregamento
    display.innerHTML = "<p>Carregando...</p>";

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/{nome}`);
        
        if (!response.ok) {
            throw new Error("Pokémon não encontrado!");
        }

        const data = await response.json();
        pokemonAtualId = data.id; // Atualiza o ID para navegação
        renderizarPokemon(data);

    } catch (erro) {
        display.innerHTML = `<p style="color: red;">Erro: ${erro.message}</p>`;
    }
}

// Função para montar o HTML do card
function renderizarPokemon(pokemon) {
    const tipos = pokemon.types.map(t => 
        `<span class="pill ${t.type.name}">${t.type.name}</span>`
    ).join('');

    const stats = pokemon.stats.map(s => 
        `<p>${s.stat.name.toUpperCase()}: ${s.base_stat}</p>`
    ).join('');

    // Define a cor de fundo baseada no tipo principal
    const corTipo = pokemon.types[0].type.name;

    display.innerHTML = `
        <div class="card ${corTipo}">
            <h2>#${pokemon.id} - ${pokemon.name.toUpperCase()}</h2>
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
            <div class="tipos">${tipos}</div>
            <div class="stats">${stats}</div>
        </div>
    `;
}

// Eventos
btnBuscar.addEventListener('click', () => buscarPokemon());

inputPoke.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') buscarPokemon();
});

// Desafio Extra: Navegação
btnAnterior.addEventListener('click', () => {
    if (pokemonAtualId > 1) {
        buscarPokemon(pokemonAtualId - 1);
    }
});

btnProximo.addEventListener('click', () => {
    buscarPokemon(pokemonAtualId + 1);
});
