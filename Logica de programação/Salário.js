function calculoSalário (horasTrabalhadas, valorHora){
    salarioFinal = horasTrabalhadas * valorHora
    console.log(`Salário igual a R$${salarioFinal}`)
    return salarioFinal
}

calculoSalário(220, 42.5)