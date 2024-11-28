// Array para armazenar os alimentos cadastrados
let alimentos = [];

// Verifica se há alimentos salvos no localStorage ao carregar a página
window.onload = function() {
    if (localStorage.getItem('alimentos')) {
        alimentos = JSON.parse(localStorage.getItem('alimentos'));
        atualizarListaAlimentos();
    }
};

// Manipula o evento de submissão do formulário de cadastro de alimentos
document.getElementById('form-alimento').addEventListener('submit', function(e) {
    e.preventDefault();
    let nomeAlimento = document.getElementById('nome-alimento').value.trim();
    if (nomeAlimento) {
        alimentos.push(nomeAlimento);
        localStorage.setItem('alimentos', JSON.stringify(alimentos));
        atualizarListaAlimentos();
        document.getElementById('nome-alimento').value = '';
    }
});

// Atualiza a lista de alimentos exibida na página
function atualizarListaAlimentos() {
    let lista = document.getElementById('lista-alimentos');
    lista.innerHTML = '';
    alimentos.forEach(function(alimento, index) {
        let li = document.createElement('li');
        li.textContent = alimento;
        lista.appendChild(li);
    });
}

// Lista de receitas pré-definidas
const receitas = [
    {
        nome: 'Salada de Frutas',
        ingredientes: ['maçã', 'banana', 'laranja', 'morango']
    },
    {
        nome: 'Omelete',
        ingredientes: ['ovo', 'queijo', 'presunto']
    },
    {
        nome: 'Vitamina de Banana',
        ingredientes: ['banana', 'leite', 'açúcar']
    },
    {
        nome: 'Sanduíche Natural',
        ingredientes: ['pão', 'alface', 'tomate', 'frango']
    }
];

// Manipula o evento de submissão do formulário de pesquisa de receitas
document.getElementById('form-pesquisa').addEventListener('submit', function(e) {
    e.preventDefault();
    let termoPesquisa = document.getElementById('termo-pesquisa').value.trim().toLowerCase();
    let resultados = pesquisarReceitas(termoPesquisa);
    exibirResultados(resultados);
});

// Pesquisa receitas com base nos alimentos cadastrados e termo de pesquisa
function pesquisarReceitas(termo) {
    return receitas.filter(function(receita) {
        let possuiIngredientes = receita.ingredientes.every(function(ingrediente) {
            return alimentos.includes(ingrediente);
        });
        let nomeCorresponde = receita.nome.toLowerCase().includes(termo);
        return possuiIngredientes && nomeCorresponde;
    });
}

// Exibe os resultados da pesquisa na página
function exibirResultados(resultados) {
    let listaResultados = document.getElementById('resultados-receitas');
    listaResultados.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(function(receita) {
            let li = document.createElement('li');
            li.textContent = receita.nome;
            listaResultados.appendChild(li);
        });
    } else {
        listaResultados.innerHTML = '<li>Nenhuma receita encontrada.</li>';
    }
}
