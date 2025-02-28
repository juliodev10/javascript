var agora = new Date()
var diaSem = agora.getDay()

console.log(`HJ é dia ${diaSem}`)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 4:
        console.log('quinta')
        break    
    default:
        console.log('ERRO')
        break    
}