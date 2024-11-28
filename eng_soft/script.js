// Lista de alimentos cadastrados pelo usuário
let alimentos = [];

// Lista de receitas pré-definidas
const receitas = [
    {
        nome: 'Panqueca de Banana',
        ingredientes: ['banana', 'ovo', 'farinha', 'leite', 'açúcar']
    },
    {
        nome: 'Vitamina de Banana',
        ingredientes: ['banana', 'leite', 'açúcar']
    },
    {
        nome: 'Salada de Frutas',
        ingredientes: ['maçã', 'banana', 'laranja', 'morango', 'uvas']
    },
    {
        nome: 'Bolo de Chocolate',
        ingredientes: ['farinha', 'açúcar', 'cacau em pó', 'ovo', 'leite']
    },
    {
        nome: 'Omelete de Queijo',
        ingredientes: ['ovo', 'queijo', 'sal', 'pimenta']
    },
    {
        nome: 'Sanduíche Natural',
        ingredientes: ['pão', 'alface', 'tomate', 'frango', 'maionese']
    },
    {
        nome: 'Suco de Laranja',
        ingredientes: ['laranja', 'água', 'açúcar']
    },
    {
        nome: 'Macarrão ao Alho e Óleo',
        ingredientes: ['macarrão', 'alho', 'azeite', 'sal']
    },
    {
        nome: 'Salada Caprese',
        ingredientes: ['tomate', 'muçarela de búfala', 'manjericão', 'azeite', 'sal']
    },
    {
        nome: 'Panqueca Americana',
        ingredientes: ['farinha', 'leite', 'ovo', 'fermento', 'açúcar']
    }
];

// Carrega os alimentos do localStorage ao carregar a página
window.onload = function() {
    if (localStorage.getItem('alimentos')) {
        alimentos = JSON.parse(localStorage.getItem('alimentos'));
        atualizarListaAlimentos();
    }
};

// Manipula o evento de submissão do formulário de cadastro de alimentos
document.getElementById('form-alimento').addEventListener('submit', function(e) {
    e.preventDefault();
    let nomeAlimento = document.getElementById('nome-alimento').value.trim().toLowerCase();
    if (nomeAlimento && !alimentos.includes(nomeAlimento)) {
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
        li.className = 'lista-item';

        let span = document.createElement('span');
        span.textContent = alimento;

        let botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.className = 'botao-editar';
        botaoEditar.onclick = function() {
            editarAlimento(index);
        };

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.className = 'botao-excluir';
        botaoExcluir.onclick = function() {
            excluirAlimento(index);
        };

        li.appendChild(span);
        li.appendChild(botaoEditar);
        li.appendChild(botaoExcluir);
        lista.appendChild(li);
    });
}

// Função para editar um alimento
function editarAlimento(index) {
    let novoNome = prompt('Editar alimento:', alimentos[index]);
    if (novoNome !== null) {
        novoNome = novoNome.trim().toLowerCase();
        if (novoNome && !alimentos.includes(novoNome)) {
            alimentos[index] = novoNome;
            localStorage.setItem('alimentos', JSON.stringify(alimentos));
            atualizarListaAlimentos();
        } else {
            alert('Alimento inválido ou já existente.');
        }
    }
}

// Função para excluir um alimento
function excluirAlimento(index) {
    if (confirm('Tem certeza que deseja excluir este alimento?')) {
        alimentos.splice(index, 1);
        localStorage.setItem('alimentos', JSON.stringify(alimentos));
        atualizarListaAlimentos();
    }
}

// Manipula o evento de submissão do formulário de pesquisa de receitas
document.getElementById('form-pesquisa').addEventListener('submit', function(e) {
    e.preventDefault();
    let termoPesquisa = document.getElementById('termo-pesquisa').value.trim().toLowerCase();
    let resultados = pesquisarReceitas(termoPesquisa);
    exibirResultados(resultados);
});

// Pesquisa receitas com base no termo de pesquisa no nome ou nos ingredientes
function pesquisarReceitas(termo) {
    return receitas.filter(function(receita) {
        let nomeCorresponde = receita.nome.toLowerCase().includes(termo);
        let ingredienteCorresponde = receita.ingredientes.some(function(ingrediente) {
            return ingrediente.toLowerCase().includes(termo);
        });
        return nomeCorresponde || ingredienteCorresponde;
    });
}

// Exibe os resultados da pesquisa na página
function exibirResultados(resultados) {
    let listaResultados = document.getElementById('resultados-receitas');
    listaResultados.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(function(receita) {
            let li = document.createElement('li');
            li.textContent = receita.nome + ' - Ingredientes: ' + receita.ingredientes.join(', ');
            listaResultados.appendChild(li);
        });
    } else {
        listaResultados.innerHTML = '<li>Nenhuma receita encontrada.</li>';
    }
}
