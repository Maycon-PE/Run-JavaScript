export function infoCarros(array) {
    let info_of_car = 0
    let c = 0
    let cat_of_car = ''
    //======SCRIPT PARA MOSTRAR AS INFORMAÇÕES DOS CARROS======\\
    function carros() {
        info_of_car = array[c]
        const forca = info_of_car[1] + (info_of_car[2] / 2) + (info_of_car[3] * 2) + (info_of_car[4] * 4)

        if ( forca <= 400) {
            cat_of_car = '[C]'
        } else if (forca <= 500) {
            cat_of_car = '[R]'
        } else if (forca <= 590) {
            cat_of_car = '[S]'
        } else if (forca <= 620) {
            cat_of_car = '[SS]'
        } else {
            cat_of_car = '[A]'
        }

        let table = `<div info id='info_table_carros' class='infoAtual'>`
          table += `<div class='modelo'>${info_of_car[0]} ${cat_of_car} - Força: ${forca}</div>`
          table += `<div class='speed'>Speed: ${info_of_car[1]} km/h</div>`
          table += `<div class='aceleracao'>Aceleração: ${info_of_car[2]}</div>`
          table += `<div class='resistencia'>Resistência: ${info_of_car[3]}</div>`
          table += `<div class='turbo'>Turbo: ${info_of_car[4]}</div>`
        table += "</div>"
        document.querySelector('.info_carros').innerHTML = table

        if (c == array.length - 1) {
            c = 0
        } else {
            c++
        }
        setTimeout(() => {
            document.getElementById('info_table_carros').classList.add('infoExibido')
        }, 1000)
        setTimeout(() => {
            document.getElementById('info_table_carros').classList.remove('infoExibido')
        }, 12000)
    }
    carros()
    setInterval(carros, 13000)
}

export function infoPilotos(array) {
    //======SCRIPT PARA MOSTRAR AS INFORMAÇÕES DOS PILOTOS======\\
    let info_of_piloto = 0
    let p = 0

    function pilotos() {
        info_of_piloto = array[p]

        let table = "<div info id='info_table_pilotos' class='infoAtual'>"
        table += `<div class='nome'>${info_of_piloto[0]}</div>`                                                                                                                  //src alterado para default por motivos pessoais
        table += `<div class='sexo'>Sexo: ${info_of_piloto[1]}</div>`
        table += `<div class='pais'>Pais: ${info_of_piloto[2]}</div>`
        table += `<div class='info_img'><img title='imagem-${info_of_piloto[0]}' src='imagens/pilotos/${info_of_piloto[4]}.jpg' alt='imagem do piloto'></div>`
        table += `<div class='habilidade'>Habilidade: ${info_of_piloto[3]}</div>`

        document.querySelector('.info_pilotos').innerHTML = table

        if (p == array.length - 1) {
            p = 0
        } else {
            p++
        }

        setTimeout(() => {
            document.getElementById('info_table_pilotos').classList.add('infoExibido')
        }, 1000)
        setTimeout(() => {
            document.getElementById('info_table_pilotos').classList.remove('infoExibido')
        }, 12000)
    }
    pilotos()
    setInterval(pilotos, 13000)
}
