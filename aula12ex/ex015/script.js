function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 //var res = document.getElementById('res')
 var res = document.querySelector('div#res')
 //if(fano.value.length == 0 || fano.value > ano)
 if(fano.value.length == 0 || Number(fano.value) > ano)//pra converter usa number
    {
    window.alert('[ERRO]Verifique os dados e tente novamente')
 } else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   // res.innerHTML = `Idade calculada: ${idade}` mostra idade atual
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if(fsex[0].checked){
        genero = 'homem'
        if(idade >=0 && idade <10){
            img.setAttribute('src', 'bb-m.png')
        }else if(idade < 21){
            img.setAttribute('src','jovem-m.png')
        }else {
            img.setAttribute('src', 'idoso-m.png')
        }
   }else if(fsex[1].checked){
    genero = 'mulher'
    if(idade >=0 && idade <10){
        img.setAttribute('src', 'bb-f.png')
    }else if(idade < 21){
        img.setAttribute('src','jovem-f.png')
    }else {
        img.setAttribute('src', 'idoso-f.png')
    }
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos`
   res.appendChild(img)
 }

}