export default function blocos() {
  return new Promise((resolve) => {
    let html = ''
    for (let s = 1; s <= 4; s++) {
      html += sons(s)
    }
    for (let t = 1; t <= 4; t++) {
      html += table(t)
    }
    resolve(html)
  })
}

function sons(s) {
  return `
    <span id="nitro${s}"></span>
  `
}

function table(chave) {
  return `
  <table cellpadding=0 cellspacing=0 class="participantes" id="table_carro${chave}">
      <tr><td area-select id="selectCarro${chave}"></td><td area-select id="selectPiloto${chave}"></td></tr>
      <tr><td class="td-nome" colspan="2" id="piloto${chave}"></td></tr>
      <tr>
        <td id="td-velocimetro${chave}">
          <div class="aproveitamento aproveitamento${chave}"></div>
          <img class="velocimetro" src="imagens/importantes/velocimetro.png">
          <div class="div-ponteiro" id="ponteiro${chave}"><img class='ponteiro' src="imagens/importantes/ponteiro.png"></div>
          <span class="velocidade" id="velocidade${chave}"></span>
        </td>
        <td id="td-cambio${chave}">
          <div class="aproveitamento aproveitamento${chave}" id="aproveitamento${chave}"></div>
          <div class="quebra" id="quebra${chave}"></div>
          <img class="cambio" id="cambio${chave}" src="imagens/importantes/cambio_desligado.png">
          <div class="categoria" id="categoria${chave}"></div>
          <div class="nitro" id="div-nitro${chave}"><span class='barras-nitros' nitro${chave}><img chama${chave} src='imagens/importantes/chama_nitro.gif'></span><span class='efeito-barra-nitro'></span></div>
        </td>
      </tr>
      <tr style="height: 20px; position: relative;">
        <td td-base class="td-menor" id="distancia${chave}"></td>
        <td td-base id="modelo${chave}" class='nomes-modelos'></td>
        <div info-rapida-carro${chave} class='info-rapida'>
          <div info-rapida-velocidade${chave}></div>
          <div info-rapida-aceleracao${chave}></div>
          <div info-rapida-resistencia${chave}></div>
          <div info-rapida-turbo${chave}></div>
          <div info-rapida-forca${chave}></div>
        </div>
      </tr>
      <tr>
        <td class="grau" colspan="2" id="grau${chave}"><span></span></td>
      </tr>
  </table>
  `
}
