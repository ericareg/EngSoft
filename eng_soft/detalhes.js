// Recupera a receita armazenada no localStorage
let receita = JSON.parse(localStorage.getItem('receitaSelecionada'));

// Preenche os detalhes na página
if (receita) {
    document.getElementById('nome-receita').textContent = receita.nome;
    document.getElementById('ingredientes-receita').textContent = receita.ingredientes.join(', ');
    document.getElementById('custo-receita').textContent = receita.custo;
    document.getElementById('vegetariana-receita').textContent = receita.vegetariana ? 'Sim' : 'Não';
    document.getElementById('dificuldade-receita').textContent = receita.dificuldade;
    document.getElementById('modo-preparo-receita').textContent = receita.modoPreparo;
    
    // Configura a imagem da receita
    const imagemReceita = document.getElementById('imagem-receita');
    if (receita.imagem) {
        imagemReceita.src = receita.imagem; // Caminho para a imagem
        imagemReceita.alt = `Imagem da receita ${receita.nome}`;
    } else {
        imagemReceita.src = 'img/default.jpg'; // Imagem padrão se não houver
        imagemReceita.alt = 'Imagem não disponível';
    }
    // Configura o botão de "Favoritar"
    const botaoFavoritar = document.getElementById('botao-favoritar');
    botaoFavoritar.addEventListener('click', function () {
        adicionarFavorito(receita.nome);
    });
} else {
    document.getElementById('detalhes-receita').innerHTML = '<p>Receita não encontrada.</p>';
}

// Função para adicionar aos favoritos
function adicionarFavorito(nomeReceita) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritos.includes(nomeReceita)) {
        favoritos.push(nomeReceita);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert(`Receita "${nomeReceita}" adicionada aos favoritos!`);
    } else {
        alert(`A receita "${nomeReceita}" já está nos favoritos!`);
    }
}