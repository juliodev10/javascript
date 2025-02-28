var agora = new Date()
var hora = agora.getHours()
console.log(`agr sãp ${hora} horas`)
if(hora < 12){
    console.log('Bomdia')
}else if(hora <= 18){
    console.log('tarde')
}else{
    console.log('noite')
}
