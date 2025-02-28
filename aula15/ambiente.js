let num = [7, 0, 8 , 6, 9]
num.push(0)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
console.log(`O valor 8 está na posição ${pos}`)
}
