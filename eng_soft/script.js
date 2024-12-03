

// Lista de alimentos cadastrados pelo usuário
let alimentos = [];
let pesquisaRealizada = false; // Variável para rastrear se uma pesquisa foi feita



// Lista de receitas pré-definidas
const receitas = [
    {
        nome: 'Panqueca de Banana',
        ingredientes: ['banana', 'ovo', 'farinha', 'leite', 'açúcar'],
        custo: 'baixo',
        vegetariana: true,
        dificuldade: 'medio',
        modoPreparo: 'Misture todos os ingredientes em uma tigela. Aqueça uma frigideira e despeje porções da massa, cozinhando cada lado até dourar.',
        imagem: 'img/panquecaBanana.webp'

    },
    {
        nome: 'Vitamina de Banana',
        ingredientes: ['banana', 'leite', 'açúcar'],
        custo: 'baixo',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Bata todos os ingredientes no liquidificador até obter uma mistura homogênea. Sirva gelado.',
        imagem: 'img/vitaminaBanana.jpg'


    },

    {
        nome: 'Salada de Frutas',
        ingredientes: ['maçã', 'banana', 'laranja', 'morango', 'uvas'],
        custo: 'medio',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Lave bem todas as frutas. Corte-as em pedaços pequenos e misture em uma tigela. Sirva gelada.',
        imagem: 'img/saladaFruta.webp'

    },
    {
        nome: 'Bolo de Chocolate',
        ingredientes: ['farinha', 'açúcar', 'cacau em pó', 'ovo', 'leite'],
        custo: 'alto',
        vegetariana: true,
        dificuldade: 'dificil',
        modoPreparo: 'Misture os ingredientes secos e depois adicione os líquidos. Mexa bem até obter uma massa homogênea. Asse em forno pré-aquecido a 180°C por 40 minutos.',
        imagem: 'img/boloChocolate.jpg'

    },
    {
        nome: 'Omelete de Queijo',
        ingredientes: ['ovo', 'queijo', 'sal', 'pimenta'],
        custo: 'baixo',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Bata os ovos em uma tigela. Aqueça uma frigideira com um pouco de óleo, despeje os ovos e adicione o queijo. Tempere com sal e pimenta. Cozinhe até firmar.',
        imagem: 'img/omeleteQueijo.webp'

    },
    {
        nome: 'Sanduíche Natural',
        ingredientes: ['pão', 'alface', 'tomate', 'frango', 'maionese'],
        custo: 'alto',
        vegetariana: false,
        dificuldade: 'baixo',
        modoPreparo: 'Corte o tomate em rodelas e prepare o frango grelhado ou desfiado. Monte o sanduíche com pão, maionese, alface, tomate e frango.',
        imagem: 'img/sanduicheNatural.jpg'

    },
    {
        nome: 'Suco de Laranja',
        ingredientes: ['laranja', 'açúcar'],
        custo: 'baixo',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Esprema as laranjas para extrair o suco. Misture com açúcar a gosto e água gelada. Sirva imediatamente.',
        imagem: 'img/sucoLaranja.jpg'

    },
    {
        nome: 'Macarrão ao Alho e Óleo',
        ingredientes: ['macarrão', 'alho', 'azeite', 'sal'],
        custo: 'alto',
        vegetariana: true,
        dificuldade: 'dificil',
        modoPreparo: 'Cozinhe o macarrão em água com sal. Em uma frigideira, aqueça o azeite e doure o alho. Misture o macarrão com o alho e azeite. Sirva quente.',
        imagem: 'img/mignon.webp'

    },
    {
        nome: 'Salada Caprese',
        ingredientes: ['tomate', 'muçarela de búfala', 'manjericão', 'azeite', 'sal'],
        custo: 'alto',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Corte o tomate e a muçarela de búfala em rodelas. Monte alternadamente em um prato, adicione folhas de manjericão e regue com azeite. Tempere com sal.',
        imagem: 'img/saladaCaprese.jpg'

    },
    {
        nome: 'Panqueca Americana',
        ingredientes: ['farinha', 'leite', 'ovo', 'fermento', 'açúcar'],
        custo: 'baixo',
        vegetariana: true,
        dificuldade: 'medio',
        modoPreparo: 'Misture todos os ingredientes em uma tigela até obter uma massa homogênea. Aqueça uma frigideira e despeje porções da massa. Cozinhe cada lado até dourar.',
        imagem: 'img/panquecaAmericana.jpg'

    
    },
    {
        nome: 'Ovo Mexido',
        ingredientes: ['ovo'],
        custo: 'baixo',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Bata os ovos levemente e tempere com sal. Em uma frigideira, cozinhe mexendo até atingir a consistência desejada.',
        imagem: 'img/ovoMexido.jpg'

    },
    {
        nome: 'Ovo Cozido',
        ingredientes: ['ovo', 'sal'],
        custo: 'baixo',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Coloque os ovos em uma panela com água e leve ao fogo. Deixe cozinhar por cerca de 8 a 10 minutos após começar a ferver. Descasque e tempere com sal.',
        imagem: 'img/ovoCozido.webp'

    },
    {
        nome: 'Filé Mignon Acebolado',
        ingredientes: ['filé mignon', 'cebola'],
        custo: 'alto',
        vegetariana: false,
        dificuldade: 'alto',
        modoPreparo: 'Tempere os filés com sal e pimenta. Aqueça uma frigideira com óleo e grelhe os filés. Adicione cebolas em fatias e refogue até caramelizar.',
        imagem: 'img/mignon.webp'

    },
    {
        nome: 'Pudim',
        ingredientes: ['leite condensado', 'açúcar', 'ovo', 'leite'],
        custo: 'medio',
        vegetariana: true,
        dificuldade: 'alto',
        modoPreparo: 'Prepare o caramelo com açúcar e coloque em uma forma. Bata os demais ingredientes no liquidificador, despeje sobre o caramelo e asse em banho-maria por 1 hora.',
        imagem: 'img/pudim.png'

    },
    {
        nome: 'Brigadeiro',
        ingredientes: ['leite condensado', 'achocolatado em pó', 'manteiga'],
        custo: 'medio',
        vegetariana: true,
        dificuldade: 'baixo',
        modoPreparo: 'Em uma panela, misture todos os ingredientes e cozinhe em fogo baixo até desgrudar do fundo. Deixe esfriar e enrole.',
        imagem: 'img/brigadeiro.webp'

    },
    {
        nome: 'File de frango com limão',
        ingredientes: ["peito de frango", "suco de limão", "sal", "pimenta-do-reino", "azeite"],
        custo: "baixo",
        vegetariana: false,
        dificuldade: "baixo",
        modoPreparo: "Tempere o frango com sal, pimenta e suco de limão. Aqueça uma frigideira com azeite e grelhe os filés em fogo médio por 4-5 minutos de cada lado, até dourar e cozinhar bem.",
        imagem: 'img/frango.avif'

    }  

];

// Carrega os alimentos do localStorage ao carregar a página
window.onload = function () {
    if (localStorage.getItem('alimentos')) {
        alimentos = JSON.parse(localStorage.getItem('alimentos'));
        atualizarListaAlimentos();
    }
};

// Atualiza a lista de alimentos exibida na página
function atualizarListaAlimentos() {
    let lista = document.getElementById('lista-alimentos');
    lista.innerHTML = '';
    alimentos.forEach(function (alimento, index) {
        let li = document.createElement('li');
        li.className = 'lista-item';

        let span = document.createElement('span');
        span.textContent = alimento;

        let botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.className = 'botao-editar';
        botaoEditar.onclick = function () {
            editarAlimento(index);
        };

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.className = 'botao-excluir';
        botaoExcluir.onclick = function () {
            excluirAlimento(index);
        };

        li.appendChild(span);
        li.appendChild(botaoEditar);
        li.appendChild(botaoExcluir);
        lista.appendChild(li);
    });

    // Recalcula as recomendações após atualizar a lista de alimentos
    recomendarReceitas();
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
            if (pesquisaRealizada) {
                atualizarResultadosPesquisa();
            }
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
        if (pesquisaRealizada) {
            atualizarResultadosPesquisa();
        }
    }
}

// Manipula o evento de submissão do formulário de cadastro de alimentos
document.getElementById('form-alimento').addEventListener('submit', function (e) {
    e.preventDefault();
    let nomeAlimento = document.getElementById('nome-alimento').value.trim().toLowerCase();
    if (nomeAlimento && !alimentos.includes(nomeAlimento)) {
        alimentos.push(nomeAlimento);
        localStorage.setItem('alimentos', JSON.stringify(alimentos));
        atualizarListaAlimentos();
        document.getElementById('nome-alimento').value = '';
        if (pesquisaRealizada) {
            atualizarResultadosPesquisa();
        }
    }
});

// Manipula o evento de submissão do formulário de pesquisa
document.getElementById('form-pesquisa').addEventListener('submit', function (e) {
    e.preventDefault();

    let termoPesquisa = document.getElementById('termo-pesquisa').value.trim().toLowerCase() || '';
    let filtroCusto = document.getElementById('filtro-custo').value || '';
    let filtroVegetariana = document.getElementById('filtro-vegetariana').value || '';
    let filtroDificuldade = document.getElementById('filtro-dificuldade').value || '';

    let resultados = pesquisarReceitas(termoPesquisa, filtroCusto, filtroVegetariana, filtroDificuldade);
    exibirResultados(resultados);
    pesquisaRealizada = true;
});

// Função para pesquisar receitas
function pesquisarReceitas(termo, custo, vegetariana, dificuldade) {
    return receitas.filter(function (receita) {
        let nomeCorresponde = receita.nome.toLowerCase().includes(termo);
        let ingredienteCorresponde = receita.ingredientes.some(function (ingrediente) {
            return ingrediente.toLowerCase().includes(termo);
        });
        let custoCorresponde = !custo || receita.custo === custo;
        let vegetarianaCorresponde = vegetariana === '' || receita.vegetariana === (vegetariana === 'sim');
        let dificuldadeCorresponde = !dificuldade || receita.dificuldade === dificuldade;

        return (nomeCorresponde || ingredienteCorresponde) && custoCorresponde && vegetarianaCorresponde && dificuldadeCorresponde;
    });
}

// Exibe os resultados da pesquisa na página
function exibirResultados(resultados) {
    let listaResultados = document.getElementById('resultados-receitas');
    listaResultados.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(function (receita) {
            let ingredientesFaltando = receita.ingredientes.filter(function (ingrediente) {
                return !alimentos.includes(ingrediente.toLowerCase());
            });

            let li = document.createElement('li');

            let link = document.createElement('a');
            link.href = 'detalhes.html';
            link.textContent = `${receita.nome} - Ingredientes: ${receita.ingredientes.join(', ')}`;
            link.style.textDecoration = 'none';
            link.style.color = 'black';

            link.addEventListener('click', function () {
                localStorage.setItem('receitaSelecionada', JSON.stringify(receita));
            });

            let status = document.createElement('span');
            status.style.marginLeft = '10px';

            if (ingredientesFaltando.length === 0) {
                status.textContent = '✔️ Todos os ingredientes disponíveis';
                status.style.color = 'green';
            } else {
                status.textContent = `❌ Faltando: ${ingredientesFaltando.join(', ')}`;
                status.style.color = 'red';
            }

            li.appendChild(link);
            li.appendChild(status);
            listaResultados.appendChild(li);
        });
    } else {
        listaResultados.innerHTML = '<li>Nenhuma receita encontrada com os critérios selecionados.</li>';
    }
}


// Função para limpar os resultados da pesquisa
function limparResultados() {
    let listaResultados = document.getElementById('resultados-receitas');
    listaResultados.innerHTML = '';
}

// Evento para o botão "Limpar Busca"
document.getElementById('limpar-busca').addEventListener('click', function () {
    document.getElementById('termo-pesquisa').value = '';
    limparResultados();
    pesquisaRealizada = false; // Reseta o estado da pesquisa

});

// Função para recomendar receitas com base nos alimentos do usuário
function recomendarReceitas() {
    let listaRecomendacoes = document.getElementById('recomendacoes-receitas');
    listaRecomendacoes.innerHTML = '';

    let receitasValidas = receitas.filter(function (receita) {
        return receita.ingredientes.every(function (ingrediente) {
            return alimentos.includes(ingrediente.toLowerCase());
        });
    });

    if (receitasValidas.length > 0) {
        receitasValidas.forEach(function (receita) {
            let li = document.createElement('li');

            let link = document.createElement('a');
            link.href = 'detalhes.html';
            link.textContent = `${receita.nome} - Ingredientes: ${receita.ingredientes.join(', ')}`;
            link.style.textDecoration = 'none';
            link.style.color = 'black';

            link.addEventListener('click', function () {
                localStorage.setItem('receitaSelecionada', JSON.stringify(receita));
            });

            li.appendChild(link);
            listaRecomendacoes.appendChild(li);
        });
    } else {
        listaRecomendacoes.innerHTML = '<li>Nenhuma receita pode ser feita com os ingredientes disponíveis.</li>';
    }
}

// Função para atualizar os resultados da pesquisa após alterações nos alimentos
function atualizarResultadosPesquisa() {
    let termoPesquisa = document.getElementById('termo-pesquisa').value.trim().toLowerCase() || '';
    let filtroCusto = document.getElementById('filtro-custo').value || '';
    let filtroVegetariana = document.getElementById('filtro-vegetariana').value || '';
    let filtroDificuldade = document.getElementById('filtro-dificuldade').value || '';

    let resultados = pesquisarReceitas(termoPesquisa, filtroCusto, filtroVegetariana, filtroDificuldade);

    exibirResultados(resultados);
    pesquisaRealizada = true; // Marca que uma pesquisa foi feita

}




