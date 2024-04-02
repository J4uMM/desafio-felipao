//criar um codígo para armazenar o nome e a quantidade de xp de um heroi
//preciso usar estrutura de decisão

let nomeDoHeroi = "J4uM"
let xp = 500000
console.log("O herói de nome: " + nomeDoHeroi + " / " + "está no nível de: " + xp)
if(xp <= 1000){
  console.log("Rank: Ferro")
}
else if(xp >= 1001 && xp <= 2000){
  console.log("Rank:Bronze")
}
else if(xp >= 2001 && xp <= 5000){
  console.log("Rank: Prata")
}
else if(xp >= 5001 && xp <= 7000){
  console.log("Rank: Ouro")
}
else if(xp >= 7001 && xp <= 8000){
    console.log("Rank: Platina")
}
else if(xp >= 8001 && xp <= 9000){
    console.log("Rank: Ascendente")
}
else if(xp >= 9001 && xp <= 10000){
    console.log("Rank: Imortal")
}
else if(xp >= 10001){
    console.log("Rank: Radiante")
}

