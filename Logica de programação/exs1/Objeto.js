//objeto "Pedro"

let pedro = {
    nome: "Pedro Nieto",
    Idade: 17,
    Trabalhando: true
}



//função com Object.assign
function copiarObjectAssign(nomeDoObjeto, propriedadeDoObjeto) {
    const copia = Object.assign , nomeDoObjeto
    delete copia[propriedadeDoObjeto]
    return copia
}



//função com spread
function copiarLista(nomeDoObjeto, propriedadeDoObjeto) {
    const copia = { ...nomeDoObjeto }
    delete copia[propriedadeDoObjeto]
    return copia
}
console.log(copiarLista(pedro, 'idade'))