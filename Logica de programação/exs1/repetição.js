function repetir(rep,numRep){
    let array = []

    do
    {
        array.push(rep)
    }while(array.length < numRep)

    console.log(array)
}

repetir("Sou bonito sou gostoso jogo bola e danço",  3)