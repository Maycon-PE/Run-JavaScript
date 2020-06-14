import { ICar } from '../classes/Car.js'
import { IPilot } from '../classes/Pilot.js'

function renderInfoCar(car: ICar) {
  let html = '<div class=\'popup-info\'>'
    html += `<div class='popup-modelo'><span>Modelo: </span>${car.modelo}</div>`
    html += `<div class='popup-velocidade'><span>Vel. Max.: </span>${car.velocidade} km/h</div>`
    html += `<div class='popup-aceleracao'><span>Aceleração: </span>${car.delta}</div>`
    html += `<div class='popup-resistencia'><span>Resistência: </span>${car.qualidade}</div>`
    html += `<div class='popup-turbo'><span>Turbo: </span>${car.nitro}</div>`
    html += `<div class='popup-forca'><span>Força: </span> ${ car.forca }</div>`
  html += '</div>'

  return html
}


function renderInfoPilot(pilot: IPilot) {
  let html = '<div class=\'popup-info\'>'
    html += `<div class='popup-nome'><span>Nome: </span>${pilot.nome}</div>`
    html += `<div class='popup-sexo'><span>Gênero: </span>${pilot.sexo === 'M'? 'Masculino': 'Feminino'}</div>`
    html += `<div class='popup-pais'><span>Pais: </span>${pilot.nacionalidade}</div>`
    html += `<div class='popup-hablidade'><span>Habilidade: </span>${pilot.habilidade}</div>`
  html += '</div>'

  return html
}

interface ILeftSideProps {
  pilots: IPilot[],
  cars: ICar[]
}

export default function({ pilots, cars }: ILeftSideProps): Promise<string> {
  return new Promise((resolve) => {
    let html = '<ul> <h2>Pilotos</h2>'

    pilots.sort().forEach((pilot) => {
      html += '<li exibir-popup>'
      html += `<span class='over'>${pilot.nome}</span>`
      html += renderInfoPilot(pilot)
      html += '</li>'
    })

    html += '</ul>'
    html += '<hr />'
    html += '<ul> <h2>Carros</h2>'
    cars.sort().forEach(car => {
      html += '<li exibir-popup>'
      html += `<span class='over'>${car.modelo}</span>`
      html += renderInfoCar(car)
      html += '</li>'
    })
    html += '</ul>'

    resolve(html)
  })
}
