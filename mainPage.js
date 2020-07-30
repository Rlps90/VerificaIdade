function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoUsuario = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (anoUsuario.value.length == 0 || anoUsuario.value > ano) {
        alert('[Erro]: Verifique os dados e tente novamente!')
    } else {
        var sexUsuario = document.getElementsByName('radsex')
        var idade = ano - Number(anoUsuario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexUsuario[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'homem0-10.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem11-20.png')
            } else if (idade < 41) {
                //adulto jovem
                img.setAttribute('src', 'homem21-40.png')
            } else if (idade < 61) {
                //adulto maduro
                img.setAttribute('src', 'homem41-60.png')
            } else {
                //terceira idade
                img.setAttribute('src', 'homem61mais.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'mulher0-10.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher11-20.png')
            } else if (idade < 41) {
                //adulto jovem
                img.setAttribute('src', 'mulher21-40.png')
            } else if (idade < 61) {
                //adulto maduro
                img.setAttribute('src', 'mulher41-60.png')
            } else {
                //terceira idade
                img.setAttribute('src', 'mulher61mais.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos!`
        res.appendChild(img)
    }

}