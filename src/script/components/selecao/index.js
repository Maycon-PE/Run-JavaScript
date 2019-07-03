export function selectCarro(array) {
	//======SCRIPT DE SELEÇÃO DOS CARROS======\\
	let carro = 0
	let nome = 0

	//======SEPARANDO OS CARROS POR CATEGORIA, PEGANDO OS INDICES======\\
	const indicesC = array.map((elemento, indice) => elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) <= 400? indice: false).filter(indice => indice !== false)
	const indicesR = array.map((elemento, indice) => elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) > 400 && elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) <= 500? indice: false).filter(indice => indice !== false)
	const indicesS = array.map((elemento, indice) => elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) > 500 && elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) <= 590? indice: false).filter(indice => indice !== false)
	const indicesSS = array.map((elemento, indice) => elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) > 590 && elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) <= 620? indice: false).filter(indice => indice !== false)
	const indicesA = array.map((elemento, indice) => elemento[1] + (elemento[2] / 2) + (elemento[3] * 2) + (elemento[4] * 4) > 620? indice: false).filter(indice => indice !== false)

	let selectCarros = ''
	//======GERANDO OS SELECT DOS CARROS======\\
	for (let selectsCarros = 1; selectsCarros <= 4; selectsCarros++) {
		selectCarros = `Carros <i class='fas fa-car-alt'></i><br><select class='seletor' id='escolhendoCarro${selectsCarros}'>`
		selectCarros += "<optgroup label='Class: [C]'>"
		for (let c = 0; c <= indicesC.length - 1; c++) {
			carro = array[indicesC[c]]
			nome = carro[0]
			selectCarros += `<option value='${indicesC[c]}'>${nome}</option>`
		}
		selectCarros += "</optgroup>"
		selectCarros += "<optgroup label='Class: [R]'>"
		for (let r = 0; r <= indicesR.length - 1; r++) {
			carro = array[indicesR[r]]
			nome = carro[0]
			selectCarros += `<option value='${indicesR[r]}'>${nome}</option>`
		}
		selectCarros += "</optgroup>"
		selectCarros += "<optgroup label='Class: [S]'>"
		for (let s = 0; s <= indicesS.length - 1; s++) {
			carro = array[indicesS[s]]
			nome = carro[0]
			selectCarros += `<option value='${indicesS[s]}'>${nome}</option>`
		}
		selectCarros += "</optgroup>"
		selectCarros += "<optgroup label='Class: [SS]'>"
		for (let ss = 0; ss <= indicesSS.length - 1; ss++) {
			carro = array[indicesSS[ss]]
			nome = carro[0]
			selectCarros += `<option value='${indicesSS[ss]}'>${nome}</option>`
		}
		selectCarros += "</optgroup>"
		selectCarros += "<optgroup label='Class: [A]'>"
		for (let a = 0; a <= indicesA.length - 1; a++) {
			carro = array[indicesA[a]]
			nome = carro[0]
			selectCarros += `<option value='${indicesA[a]}'>${nome}</option>`
		}
		selectCarros += "</optgroup>"
		selectCarros += '</select>'
		document.getElementById(`selectCarro${selectsCarros}`).innerHTML = selectCarros
	}
	//======FIM DO SCRIPT DE SELEÇÃO DOS CARROS======\\

}

export function selectPiloto(array) {
    //======SCRIPT PARA SELEÇÃO DOS PILOTOS======\\

    //======PEGANDO OS INDICES DOS PILOTOS DE CADA SEXO ['M', 'F']======\\
    let piloto
    let nome
    const indicesM = array.map((piloto, indice) => piloto[1] === 'M' ? indice : false).filter(indice => indice !== false)
    const indicesF = array.map((piloto, indice) => piloto[1] === 'F' ? indice : false).filter(indice => indice !== false)

    //======GERANDO SELECT DOS PILOTOS======\\
    let selectsPilotos = ''
    for (let p = 1; p <= 4; p++) {
        selectsPilotos = `Pilotos <i class='fas fa-users'></i><br><select class='seletor' id='escolhendoPiloto${p}'>`
        selectsPilotos += "<optgroup label='Homens'>"
        for (let m = 0; m <= indicesM.length - 1; m++) {
            piloto = array[indicesM[m]]
            nome = piloto[0]
            selectsPilotos += `<option value='${indicesM[m]}'>${nome}</option>`
        }
        selectsPilotos += "</optgroup>"
        selectsPilotos += "<optgroup label='Mulheres'>"
        for (let f = 0; f <= indicesF.length - 1; f++) {
            piloto = array[indicesF[f]]
            nome = piloto[0]
            selectsPilotos += `<option value='${indicesF[f]}'>${nome}</option>`
        }
        selectsPilotos += "</optgroup>"
        selectsPilotos += "</select>"
        document.getElementById(`selectPiloto${p}`).innerHTML = selectsPilotos
	}

    //======FIM DO SCRIPT DE SELEÇÃO DOS PILOTOS======\\
}
