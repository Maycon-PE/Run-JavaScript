export const carsDetails = (cars) => {
    let c = 0;
    function renderInfo() {
        const { modelo, categoria, velocidade, delta, nitro, qualidade, forca } = cars[c];
        let table = `
      <div info id='info_table_carros' class='infoAtual'>
        <div class='modelo'> ${modelo} ${categoria} - Força ${forca}</div>
        <div class='speed'>Velocidade: ${velocidade} km/h</div>
        <div class='aceleracao'>Aceleração: ${delta}</div>
        <div class='resistencia'>Resistência: ${qualidade}</div>
        <div class='turbo'>Turbo: ${nitro}</div>
      </div>  
    `;
        document.querySelector('.info_carros').innerHTML = table;
        if (c == cars.length - 1) {
            c = 0;
        }
        else {
            c++;
        }
        setTimeout(() => {
            document.getElementById('info_table_carros').classList.add('infoExibido');
        }, 1000);
        setTimeout(() => {
            document.getElementById('info_table_carros').classList.remove('infoExibido');
        }, 12000);
    }
    renderInfo();
    setInterval(renderInfo, 13000);
};
export const pilotsDetails = (pilots) => {
    let p = 0;
    function renderInfo() {
        const { nome, habilidade, sexo, src, nacionalidade } = pilots[p];
        let table = `
      <div info id='info_table_pilotos' class='infoAtual'>
        <div class='nome'> ${nome}</div>
        <div class='sexo'>Sexo: ${sexo}</div>
        <div class='pais'>Pais: ${nacionalidade}</div>
        <div class='info_img'><img title='${nome}' src='./imagens/pilotos/${src}.jpg' alt='Foto de ${nome}'></div>
        <div class='habilidade'>Habilidade: ${habilidade}</div>
      </div>  
    `;
        document.querySelector('.info_pilotos').innerHTML = table;
        if (p == pilots.length - 1) {
            p = 0;
        }
        else {
            p++;
        }
        setTimeout(() => {
            document.getElementById('info_table_pilotos').classList.add('infoExibido');
        }, 1000);
        setTimeout(() => {
            document.getElementById('info_table_pilotos').classList.remove('infoExibido');
        }, 12000);
    }
    renderInfo();
    setInterval(renderInfo, 13000);
};
