// Exemplo de favoritos salvos no localStorage
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Função para exibir favoritos
function exibirFavoritos() {
    let listaFavoritos = document.getElementById('favoritos-receitas');
    listaFavoritos.innerHTML = '';

    if (favoritos.length > 0) {
        favoritos.forEach(function(favorito) {
            let li = document.createElement('li');
            li.textContent = favorito;
            listaFavoritos.appendChild(li);
        });
    } else {
        listaFavoritos.innerHTML = '<li>Nenhuma receita favorita encontrada.</li>';
    }
}

// Carrega os favoritos ao abrir a página
window.onload = exibirFavoritos;
