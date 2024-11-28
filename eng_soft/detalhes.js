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
} else {
    document.getElementById('detalhes-receita').innerHTML = '<p>Receita não encontrada.</p>';
}
