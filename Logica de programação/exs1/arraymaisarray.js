function receberPrimeoroeUltimo(array)
{
  const primeiroElemento = array.shift()
  const ultimoElemento = array.pop()


return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeoroeUltimo([13, 25, 26]))