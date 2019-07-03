export default function lateral(pilotos, carros) {
  return new Promise((resolve) => {
    let html = '<ul> <h2>Pilotos</h2>'
    pilotos.sort().forEach((piloto) => {
      html += '<li exibir-popup>'
      html += `<span class='over'>${piloto[0]}</span>`
      html += renderInfoPiloto(piloto)
      html += '</li>'
    })
    html += '</ul>'
    html += '<hr />'
    html += '<ul> <h2>Carros</h2>'
    carros.sort().forEach(carro => {
      html += '<li exibir-popup>'
      html += `<span class='over'>${carro[0]}</span>`
      html += renderInfoCarro(carro)
      html += '</li>'
    })
    html += '</ul>'

    resolve(html)
  })
}

function renderInfoPiloto(piloto) {
  let html = '<div class=\'popup-info\'>'
    html += `<div class='popup-nome'><span>Nome: </span>${piloto[0]}</div>`
    html += `<div class='popup-sexo'><span>Gênero: </span>${piloto[1] === 'M'? 'Masculino': 'Feminino'}</div>`
    html += `<div class='popup-pais'><span>Pais: </span>${piloto[2]}</div>`
    html += `<div class='popup-hablidade'><span>Habilidade: </span>${piloto[3]}</div>`
  html += '</div>'

  return html
}

function renderInfoCarro(carro) {
  let html = '<div class=\'popup-info\'>'
    html += `<div class='popup-modelo'><span>Modelo: </span>${carro[0]}</div>`
    html += `<div class='popup-velocidade'><span>Vel. Max.: </span>${carro[1]} km/h</div>`
    html += `<div class='popup-aceleracao'><span>Aceleração: </span>${carro[2]}</div>`
    html += `<div class='popup-resistencia'><span>Resistência: </span>${carro[3]}</div>`
    html += `<div class='popup-turbo'><span>Turbo: </span>${carro[4]}</div>`
    html += `<div class='popup-forca'><span>Força: </span> ${getCategoria(carro[1] + (carro[2] / 2) + (carro[3] * 2) + (carro[4] * 4))}</div>`
  html += '</div>'

  return html
}

function getCategoria(forca) {
  let categoria = ''
  if (forca <= 400) {
    categoria = '[C]'
  } else if (forca <= 500) {
    categoria = '[R]'
  } else if (forca <= 590) {
    categoria = '[S]'
  } else if (forca <= 620) {
    categoria = '[SS]'
  } else {
    categoria = '[A]'
  }

  return `${forca} ${categoria}`
}
