// Recupera os favoritos salvos no localStorage
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Função para exibir favoritos
function exibirFavoritos() {
    let listaFavoritos = document.getElementById('favoritos-receitas');
    listaFavoritos.innerHTML = '';

    if (favoritos.length > 0) {
        favoritos.forEach(function(favorito, index) {
            let li = document.createElement('li');
            
            li.textContent = favorito;

            // Adiciona o botão "Remover"
            let botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.style.marginLeft = '10px';
            botaoRemover.style.backgroundColor = '#f44336'; // Cor vermelha
            botaoRemover.style.color = 'white';
            botaoRemover.style.border = 'none';
            botaoRemover.style.borderRadius = '4px';
            botaoRemover.style.cursor = 'pointer';

            // Define a funcionalidade do botão "Remover"
            botaoRemover.onclick = function () {
                removerFavorito(index);
            };

            li.appendChild(botaoRemover);
            listaFavoritos.appendChild(li);
             // Cria um link para a página de detalhes
             let link = document.createElement('a');
             link.href = 'detalhes.html';
             
 
        });
    } else {
        listaFavoritos.innerHTML = '<li>Nenhuma receita favorita encontrada.</li>';
    }
}

// Função para adicionar uma receita aos favoritos
function adicionarFavorito(receita) {
    if (!favoritos.includes(receita)) {
        favoritos.push(receita);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert(`Receita "${receita}" adicionada aos favoritos!`);
    } else {
        alert(`A receita "${receita}" já está nos favoritos!`);
    }
}

// Função para remover um favorito
function removerFavorito(index) {
    if (confirm('Tem certeza que deseja remover este favorito?')) {
        favoritos.splice(index, 1); // Remove o item pelo índice
        localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Atualiza o localStorage
        exibirFavoritos(); // Atualiza a lista na interface
    }
}

// Carrega os favoritos ao abrir a página
window.onload = exibirFavoritos;
