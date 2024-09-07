// Mapeamento de códigos de atividade para suas descrições
const descricaoAtividades = {
    "1": "Feedback 2024.1",
    "2": "TAREFAS ONLINE Aula 13: Dinâmica – Movimento Circular (MC)",
    "3": "TAREFAS ONLINE Aula 14: Trabalho e Energia – Trabalho mecânico",
    "4": "TAREFAS ONLINE Aula 15: Trabalho e Energia – Potência",
    "5": "TAREFAS ONLINE Aula 16: Trabalho e Energia – Sistemas conservativos",
    "6": "TAREFAS ONLINE Aula 13: Óptica Geométrica – Reflexão total e prismas",
    "7": "TAREFAS ONLINE Aula 14: Óptica Geométrica – Dioptro plano",
    "8": "TAREFAS ONLINE Aula 15: Óptica Geométrica – Lentes esféricas",
    "9": "TAREFAS ONLINE Aula 16: Óptica Geométrica – Estudo analítico da imagem gerada por lentes esféricas",
    "10": "TAREFAS ONLINE Aula 17: Óptica da visão",
    "11": "FÍSICA TRILHA, Tema 7: O deslocamento de uma onda - Google Forms",
    "12": "FÍSICA TRILHA, Tema 7",
    "13": "Correção PO1 3º Bimestre",
    "14": "FÍSICA 3 Aula 20: Ondulatória - Reflexão e refração de pulsos em cordas",
    "15": "FÍSICA TRILHA Tema 8: Fenômenos ópticos (Livro 2)"
};

function loadStudents() {
    const turmaSelecionada = document.getElementById("turma").value;
    const selectAluno = document.getElementById("aluno");
    selectAluno.innerHTML = '<option value="">Selecione o aluno</option>';

    if (!turmaSelecionada) return;

    const alunosFiltrados = alunos.filter(aluno => aluno.turma === turmaSelecionada);

    alunosFiltrados.forEach(aluno => {
        const option = document.createElement("option");
        option.value = aluno.codigo;
        option.text = aluno.nome;
        selectAluno.appendChild(option);
    });
}

function consultarNota() {
    const codigo = parseInt(document.getElementById("codigo").value, 10);
    const alunoSelecionado = document.getElementById("aluno").value;
    const resultadoDiv = document.getElementById("resultado");

    const aluno = alunos.find(aluno => aluno.codigo.toString() === alunoSelecionado && parseInt(aluno.codigo, 10) === codigo);

    if (aluno) {
        let detalhesAtividades = "<strong>Atividades Realizadas:<br></strong><br>";
        Object.entries(aluno.atividades).forEach(([atividade, porcentagem]) => {
            detalhesAtividades += `<div class="atividade-descricao">${descricaoAtividades[atividade] || 'Descrição não disponível'}: <strong>${porcentagem}</strong></div>`;
        });
        detalhesAtividades += `<strong class="nota-final"><br>Nota Final:</strong> <strong>${aluno.notaFinal}</strong>`;
        resultadoDiv.innerHTML = detalhesAtividades;
    } else {
        resultadoDiv.innerHTML = 'Código incorreto ou aluno não encontrado.';
    }
}

