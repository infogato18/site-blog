function mostrarMaterias(professor) {

    const caixa = document.getElementById("materiasProfessor");
    const nome = document.getElementById("nomeProfessor");
    const materias = document.getElementById("listaMaterias");

    if (professor === "professor1") {

        nome.innerText = "Elinardy Andrade";

        materias.innerHTML = `
            • Informática Básica<br>
            • HTML/CSS
        `;

    }

    if (professor === "professor2") {

        nome.innerText = "Nome do Professor 2";

        materias.innerHTML = `
            • Programação<br>
            • Arq Manutenção  de computadores                                        
            • Planejamento de Carreira
        `;

    }

    caixa.style.display = "block";
}


document.getElementById("fecharMaterias").onclick = function() {

    document.getElementById("materiasProfessor").style.display = "none";

};
