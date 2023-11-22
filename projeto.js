let nome = ('Dariun')
let xp = 2001
let classe = ('')
console.log('O Héroi ' + nome + ' tem ' + xp + ' de XP')
if (xp <= 1000) {
    classe = ('Ferro')
}else if (xp > 1000 && xp <= 2000){
    classe = ('Bronze')
}else if (xp > 2000 && xp <= 6000){
    classe = ('Prata')
}else if (xp > 6000 && xp <= 7000){
    classe = ('Ouro')
}else if (xp > 7000 && xp <= 8000){
    classe = ('Platina')
}else if (xp > 8000 && xp <= 9000){
    classe = ('Ascendente')
}else if (xp > 9000 && xp <= 10000){
    classe = ('Imortal')
}else if (xp >= 10001){
    classe = ('Radiante')
}
console.log('O Héroi ' + nome + ' se encontra na classe: ' + classe)