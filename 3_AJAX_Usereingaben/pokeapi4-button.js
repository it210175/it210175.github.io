let currentPokemon = 0;


function nextPokemon() {
    currentPokemon++;
    loadPokemon();
}
function previousPokemon() {
    currentPokemon--;
    loadPokemon();
}
function loadPokemon() {

    for (let i = 0; i < 1; i++) {
        fehler.innerHTML = '';
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //convert answer into object
                let pokemon = JSON.parse(this.responseText);
                console.log(pokemon);
                console.log(pokemon.name);
                console.log(pokemon.weight);
                console.log(pokemon.types[0].type.name);
                console.log(pokemon.sprites.front_shiny);

                document.getElementById('ergebnis2').innerHTML =
                    '<div class="pokemonDiv">' +
                    '<h2>Name: ' + pokemon.name + '</h2>' +
                    '<h2>Hectograms: ' + pokemon.weight + '</h2>' +
                    '<h2>Type: ' + pokemon.types[0].type.name + '</h2>' +
                    '<img class="PokemonImg" src="' + pokemon.sprites.front_shiny + '" alt="">' +
                    '</div>';
            }
        }

        xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/' + currentPokemon + '', true);

        xhttp.send();
    }
}