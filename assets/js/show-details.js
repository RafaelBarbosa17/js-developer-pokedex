const cardPokemon = document.getElementById("cardPokemon");

let pokemons = [];

const allPokemons = (arr) => {
    pokemons.length == 0 
    ? pokemons = arr 
    : pokemons.push(...arr)
};

const hiddenCard = () => {
    cardPokemon.style.display = "none"
}

const showPokemonInfo = (id) => {
  cardPokemon.style.display = "block";
  pokemon = pokemons[id - 1];
  cardPokemon.innerHTML = `
        <div class="card ${pokemon.type}">
            <button onclick="hiddenCard()" id="close" class="close"></button>
            <h2 class="card-name">
                ${pokemon.name}
            </h2>
            <div class="card-img">
                <div class="card-types">
                    ${pokemon.types
                    .map((type) => `
                        <li class="card-type">
                            <img class="type-icon ${type}" src="/assets/imgs/${type}.svg" />
                            ${type}
                        </li>
                    `)
                    .join("")}
                </div>
                <div class="card-img-box">
                    <img src="${pokemon.avatar}" />
                </div>
            </div>
            <div class="stats">
                <ul class="stat-infos">
                    ${pokemon.stats.map(stat => `
                        <li class="stat-item">
                            <span class="stat-name">
                            ${stat.name}:
                            </span>
                            <div class="stat-bar">
                                <div class="stat-value" style="width: ${stat.value}%;"></div>
                            </div>
                            
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
};