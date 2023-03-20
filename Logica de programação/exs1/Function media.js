notas = [3, 10, 9, 8]
somaNotas = notas.reduce((soma, nota) => soma += nota, 0) / notas.length


console.log(somaNotas)