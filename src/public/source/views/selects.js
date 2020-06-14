import { carsList, pilotsList } from '../data/index.js';
export function selectCar() {
    //======SCRIPT DE SELEÇÃO DOS CARROS======\\
    let car = 0;
    let model;
    //======SEPARANDO OS CARROS POR CATEGORIA, PEGANDO OS INDICES======\\
    const indicesC = carsList.map((car, index) => car.categoria === 'C' ? index : false).filter((situation) => situation !== false);
    const indicesR = carsList.map((car, index) => car.categoria === 'R' ? index : false).filter((situation) => situation !== false);
    const indicesS = carsList.map((car, index) => car.categoria === 'S' ? index : false).filter((situation) => situation !== false);
    const indicesSS = carsList.map((car, index) => car.categoria === 'SS' ? index : false).filter((situation) => situation !== false);
    const indicesA = carsList.map((car, index) => car.categoria === 'A' ? index : false).filter((situation) => situation !== false);
    let selectsCarHTML = '';
    //======GERANDO OS SELECT DOS CARROS======\\
    for (let carSelects = 1; carSelects <= 4; carSelects++) {
        selectsCarHTML = `Carros <i class='fas fa-car-alt'></i><br><select class='seletor' id='escolhendoCarro${carSelects}'>`;
        selectsCarHTML += "<optgroup label='Class: [C]'>";
        for (let c = 0; c <= indicesC.length - 1; c++) {
            car = carsList[indicesC[c]];
            model = car.modelo;
            selectsCarHTML += `<option value='${indicesC[c]}'>${model}</option>`;
        }
        selectsCarHTML += "</optgroup>";
        selectsCarHTML += "<optgroup label='Class: [R]'>";
        for (let r = 0; r <= indicesR.length - 1; r++) {
            car = carsList[indicesR[r]];
            model = car.modelo;
            selectsCarHTML += `<option value='${indicesR[r]}'>${model}</option>`;
        }
        selectsCarHTML += "</optgroup>";
        selectsCarHTML += "<optgroup label='Class: [S]'>";
        for (let s = 0; s <= indicesS.length - 1; s++) {
            car = carsList[indicesS[s]];
            model = car.modelo;
            selectsCarHTML += `<option value='${indicesS[s]}'>${model}</option>`;
        }
        selectsCarHTML += "</optgroup>";
        selectsCarHTML += "<optgroup label='Class: [SS]'>";
        for (let ss = 0; ss <= indicesSS.length - 1; ss++) {
            car = carsList[indicesSS[ss]];
            model = car.modelo;
            selectsCarHTML += `<option value='${indicesSS[ss]}'>${model}</option>`;
        }
        selectsCarHTML += "</optgroup>";
        selectsCarHTML += "<optgroup label='Class: [A]'>";
        for (let a = 0; a <= indicesA.length - 1; a++) {
            car = carsList[indicesA[a]];
            model = car.modelo;
            selectsCarHTML += `<option value='${indicesA[a]}'>${model}</option>`;
        }
        selectsCarHTML += "</optgroup>";
        selectsCarHTML += '</select>';
        document.getElementById(`selectCarro${carSelects}`).innerHTML = selectsCarHTML;
    }
    //======FIM DO SCRIPT DE SELEÇÃO DOS CARROS======\\
}
export function selectPiloto() {
    //======SCRIPT PARA SELEÇÃO DOS PILOTOS======\\
    //======PEGANDO OS INDICES DOS PILOTOS DE CADA SEXO ['M', 'F']======\\
    let pilot;
    let nome;
    const indicesM = pilotsList.map((pilot, indice) => pilot.sexo === 'M' ? indice : false).filter(indice => indice !== false);
    const indicesF = pilotsList.map((pilot, indice) => pilot.sexo === 'F' ? indice : false).filter(indice => indice !== false);
    //======GERANDO SELECT DOS PILOTOS======\\
    let selectsPilotos = '';
    for (let p = 1; p <= 4; p++) {
        selectsPilotos = `Pilotos <i class='fas fa-users'></i><br><select class='seletor' id='escolhendoPiloto${p}'>`;
        selectsPilotos += "<optgroup label='Homens'>";
        for (let m = 0; m <= indicesM.length - 1; m++) {
            pilot = pilotsList[indicesM[m]];
            nome = pilot.nome;
            selectsPilotos += `<option value='${indicesM[m]}'>${nome}</option>`;
        }
        selectsPilotos += "</optgroup>";
        selectsPilotos += "<optgroup label='Mulheres'>";
        for (let f = 0; f <= indicesF.length - 1; f++) {
            pilot = pilotsList[indicesF[f]];
            nome = pilot.nome;
            selectsPilotos += `<option value='${indicesF[f]}'>${nome}</option>`;
        }
        selectsPilotos += "</optgroup>";
        selectsPilotos += "</select>";
        document.getElementById(`selectPiloto${p}`).innerHTML = selectsPilotos;
    }
    //======FIM DO SCRIPT DE SELEÇÃO DOS PILOTOS======\\
}
