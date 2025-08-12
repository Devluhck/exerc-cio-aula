function validaproc() {
    const alunosTurma1 = parseInt(document.getElementById("turma1").value);
    const alunosTurma2 = parseInt(document.getElementById("turma2").value);
    const alunosTurma3 = parseInt(document.getElementById("turma3").value);

    let aprovados = 0;
    let reprovados = 0;
    let somaMedias = 0;
    let totalAlunos = alunosTurma1 + alunosTurma2 + alunosTurma3;

    let i = 0;
    if (alunosTurma1 > 0) {
        do {
            const nota1 = parseFloat((Math.random() * 6 + 4).toFixed(1));
            const nota2 = parseFloat((Math.random() * 6 + 4).toFixed(1));
            const media = (nota1 + nota2) / 2;

            console.log("Turma 1 - Aluno " + (i + 1) + ": Nota 1 = " + nota1 + ", Nota 2 = " + nota2 + ", Média = " + media.toFixed(1));

            somaMedias += media;
            if (media >= 7) aprovados++;
            else reprovados++;
            
            i++;
        } while (i < alunosTurma1);
    }

  
    i = 0;
    if (alunosTurma2 > 0) {
        do {
            const nota1 = parseFloat((Math.random() * 6 + 4).toFixed(1));
            const nota2 = parseFloat((Math.random() * 6 + 4).toFixed(1));
            const media = (nota1 + nota2) / 2;

            console.log("Turma 2 - Aluno " + (i + 1) + ": Nota 1 = " + nota1 + ", Nota 2 = " + nota2 + ", Média = " + media.toFixed(1));

            somaMedias += media;
            if (media >= 7) aprovados++;
            else reprovados++;
            
            i++;
        } while (i < alunosTurma2);
    }

    
    i = 0;
    if (alunosTurma3 > 0) {
        do {
            const nota1 = parseFloat((Math.random() * 6 + 4).toFixed(1));
            const nota2 = parseFloat((Math.random() * 6 + 4).toFixed(1));
            const media = (nota1 + nota2) / 2;

            console.log("Turma 3 - Aluno " + (i + 1) + ": Nota 1 = " + nota1 + ", Nota 2 = " + nota2 + ", Média = " + media.toFixed(1));

            somaMedias += media;
            if (media >= 7) aprovados++;
            else reprovados++;
            
            i++;
        } while (i < alunosTurma3);
    }

    const mediaGeral = (somaMedias / totalAlunos).toFixed(1);

    alert(
        "RESULTADOS:\n\n" +
        "Total de Alunos: " + totalAlunos + "\n" +
        "Aprovados: " + aprovados + "\n" +
        "Reprovados: " + reprovados + "\n" +
        "Média Geral da Escola: " + mediaGeral
    );

    return false;
}